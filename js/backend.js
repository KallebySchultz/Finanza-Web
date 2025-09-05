const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 8080;

// Inicializa Firebase Admin SDK
const serviceAccount = require('./serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://finanza-2cd68-default-rtdb.firebaseio.com"
});

app.use(cors());
app.use(bodyParser.json());

// Autenticação via JWT do Firebase
async function authRequired(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: 'Token ausente.' });
  const token = auth.replace('Bearer ', '');
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Token inválido ou expirado.' });
  }
}

// Rota para retornar dados do usuário logado
app.get('/api/auth/me', authRequired, async (req, res) => {
  try {
    const uid = req.user.uid;
    const ref = admin.database().ref(`usuarios/${uid}`);
    let userData = (await ref.once('value')).val();

    if (!userData) {
      userData = {
        nome: req.user.name || req.user.email || 'Novo usuário',
        saldo_total: 0,
        receitas_mes: 0,
        despesas_mes: 0,
        total_contas: 0,
        email: req.user.email || ''
      };
      await ref.set(userData);
    }
    userData.id = uid;
    userData.created_at = req.user.auth_time * 1000;
    res.status(200).json(userData);
  } catch (err) {
    res.status(200).json({
      saldo_total: 0,
      receitas_mes: 0,
      despesas_mes: 0,
      total_contas: 0,
      nome: 'Erro',
      email: ''
    });
  }
});

// -------- ROTAS DO PAINEL ADMIN -------- //

/**
 * Retorna todos os usuários cadastrados no Firebase Auth
 */
app.get('/api/admin/users', authRequired, async (req, res) => {
  try {
    const listUsersResult = await admin.auth().listUsers();
    const users = await Promise.all(listUsersResult.users.map(async userRecord => {
      // Busca dados extras no RTDB se quiser
      let extraData = {};
      try {
        const snapshot = await admin.database().ref(`usuarios/${userRecord.uid}`).once('value');
        extraData = snapshot.val() || {};
      } catch {}
      return {
        id: userRecord.uid,
        nome: extraData.nome || userRecord.displayName || userRecord.email,
        email: userRecord.email,
        created_at: userRecord.metadata.creationTime,
        total_contas: extraData.total_contas || 0,
        total_transacoes: extraData.total_transacoes || 0
      };
    }));
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar usuários.' });
  }
});

/**
 * Estatísticas gerais (mock ou base real)
 */
app.get('/api/admin/stats', authRequired, async (req, res) => {
  try {
    // Conta usuários no Auth
    const listUsersResult = await admin.auth().listUsers();
    const total_usuarios = listUsersResult.users.length;

    // Opcional: contar contas e transações, adaptar conforme sua estrutura!
    let total_contas = 0;
    let total_transacoes = 0;
    let volume_total = 0;

    // Exemplo: busca em todos usuários na RTDB
    const usuariosSnap = await admin.database().ref('usuarios').once('value');
    const usuarios = usuariosSnap.val() || {};
    Object.values(usuarios).forEach(u => {
      total_contas += u.total_contas || 0;
      total_transacoes += u.total_transacoes || 0;
      volume_total += u.saldo_total || 0;
    });

    res.json({
      total_usuarios,
      total_contas,
      total_transacoes,
      volume_total
    });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar estatísticas.' });
  }
});

// -------- FIM ROTAS ADMIN -------- //

app.listen(PORT, () => {
  console.log(`API Finanza Desktop rodando em http://localhost:${PORT}`);
});
