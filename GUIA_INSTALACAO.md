# 🚀 Guia de Instalação - Finanza Web

## 📋 Requisitos do Sistema

### 💻 Hardware Mínimo
- **Processador**: 1 GHz ou superior
- **Memória RAM**: 2 GB disponível
- **Espaço em Disco**: 100 MB livres
- **Conexão à Internet**: Necessária para primeira configuração e sincronização

### 🖥️ Software Necessário
- **Sistema Operacional**: Windows 10+, macOS 10.14+, Linux Ubuntu 18.04+
- **Node.js**: Versão 18.19.0 ou superior ([Download aqui](https://nodejs.org/))
- **NPM**: Versão 8.0.0+ (incluído com Node.js)
- **Git**: Para clonagem do repositório ([Download aqui](https://git-scm.com/))
- **Navegador**: Chrome, Firefox, Safari ou Edge (versões recentes)

### ☁️ Conta Firebase
- Conta Google para acessar [Firebase Console](https://console.firebase.google.com/)

---

## 🛠️ Instalação Passo a Passo

### 1️⃣ Verificando Pré-requisitos

#### Verificar Node.js
```bash
node --version
# Deve mostrar v18.19.0 ou superior
```

#### Verificar NPM
```bash
npm --version
# Deve mostrar 8.0.0 ou superior
```

#### Verificar Git
```bash
git --version
# Deve mostrar versão do Git
```

### 2️⃣ Clonando o Repositório

```bash
# Clone o repositório
git clone https://github.com/KallebySchultz/Finanza-Web.git

# Entre na pasta do projeto
cd Finanza-Web

# Verifique se os arquivos foram baixados
ls
```

### 3️⃣ Instalando Dependências

```bash
# Instale todas as dependências necessárias
npm install

# Se houver erros, tente limpar cache
npm cache clean --force
npm install
```

**Dependências que serão instaladas:**
- express (servidor web)
- firebase-admin (integração Firebase)
- cors (política de CORS)
- body-parser (parse de requisições)
- jsonwebtoken (autenticação)
- nodemon (desenvolvimento)

### 4️⃣ Configurando Firebase

#### A. Criando Projeto Firebase
1. Acesse [Firebase Console](https://console.firebase.google.com/)
2. Clique em **"Adicionar projeto"**
3. Nomeie seu projeto (ex: "meu-finanza")
4. Aceite os termos e clique **"Continuar"**
5. Configure Google Analytics (opcional)
6. Clique **"Criar projeto"**

#### B. Configurando Authentication
1. No console do Firebase, vá em **"Authentication"**
2. Clique na aba **"Sign-in method"**
3. Ative **"Email/senha"**
4. Clique **"Salvar"**

#### C. Configurando Realtime Database
1. Vá em **"Realtime Database"**
2. Clique **"Criar banco de dados"**
3. Escolha localização (ex: us-central1)
4. Inicie em **"Modo de teste"** por enquanto
5. Clique **"Concluído"**

#### D. Obtendo Credenciais
1. Vá em **"Configurações do projeto"** (ícone de engrenagem)
2. Aba **"Contas de serviço"**
3. Clique **"Gerar nova chave privada"**
4. Salve o arquivo como `serviceAccountKey.json`
5. **Mova o arquivo para a pasta raiz do projeto**

#### E. Obtendo Configuração Web
1. Na aba **"Geral"** das configurações
2. Role até **"Seus apps"**
3. Clique no ícone **"</>"** (Web)
4. Registre o app com um nome
5. **Copie as configurações** que aparecem

### 5️⃣ Configurando Arquivo de Credenciais

#### Verificar serviceAccountKey.json
```bash
# Verificar se o arquivo existe na raiz
ls serviceAccountKey.json
```

⚠️ **IMPORTANTE**: O arquivo `serviceAccountKey.json` deve estar na pasta raiz do projeto!

### 6️⃣ Atualizando Configurações

#### Editar configurações do Firebase nos arquivos HTML
Substitua as configurações nos seguintes arquivos:

**📁 html/dashboard.html** (linha ~64):
```javascript
const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_PROJETO.firebaseapp.com",
    databaseURL: "https://SEU_PROJETO-default-rtdb.firebaseio.com",
    projectId: "SEU_PROJETO",
    storageBucket: "SEU_PROJETO.appspot.com",
    messagingSenderId: "SEU_MESSAGING_ID",
    appId: "SEU_APP_ID",
    measurementId: "SEU_MEASUREMENT_ID"
};
```

**Arquivos que precisam ser atualizados:**
- `html/login.html`
- `html/register.html`
- `html/dashboard.html`
- `html/accounts.html`
- `html/transactions.html`
- `html/categories.html`
- `html/profile.html`
- `html/admin.html`

### 7️⃣ Configurando Regras de Segurança

#### No Firebase Console:
1. Vá em **"Realtime Database"**
2. Aba **"Regras"**
3. Substitua por:

```json
{
  "rules": {
    "usuarios": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    },
    "contas": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    },
    "transacoes": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    },
    "categorias": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    }
  }
}
```

4. Clique **"Publicar"**

---

## 🎯 Iniciando o Sistema

### 🚀 Primeira Execução

#### Método 1: Script Automático (Windows)
```bash
# Execute o script de inicialização
start_finanza.bat
```

#### Método 2: Manual
```bash
# Inicie o servidor
npm start

# Ou para desenvolvimento com auto-reload
npm run dev
```

### 🌐 Acessando a Aplicação

1. Abra seu navegador
2. Acesse: `http://localhost:3001`
3. Você deve ver a página de redirecionamento
4. Será redirecionado para o login

### 👤 Criando Primeiro Usuário

1. Clique em **"Não tem conta? Cadastre-se"**
2. Preencha:
   - Nome completo
   - Email válido
   - Senha (mínimo 6 caracteres)
3. Clique **"Cadastrar"**
4. Faça login com as credenciais criadas

---

## ✅ Verificando Instalação

### 🔍 Checklist de Verificação

- [ ] Node.js instalado e versão correta
- [ ] Dependências NPM instaladas sem erros
- [ ] Arquivo `serviceAccountKey.json` na raiz
- [ ] Configurações Firebase atualizadas nos HTMLs
- [ ] Servidor inicia sem erros (`npm start`)
- [ ] Página carrega em `http://localhost:3001`
- [ ] É possível criar conta e fazer login
- [ ] Dashboard carrega após login
- [ ] É possível navegar entre páginas

### 🧪 Teste Básico

1. **Crie uma conta** nova
2. **Faça login** com sucesso
3. **Adicione uma conta** bancária
4. **Crie uma categoria** de despesa
5. **Registre uma transação**
6. **Verifique** se aparece no dashboard

---

## 🚨 Solução de Problemas Comuns

### ❌ Erro: "Node não encontrado"
**Solução:**
1. Reinstale Node.js do site oficial
2. Reinicie o terminal/cmd
3. Verifique com `node --version`

### ❌ Erro: "npm install falha"
**Solução:**
```bash
# Limpe cache e tente novamente
npm cache clean --force
rm -rf node_modules
rm package-lock.json
npm install
```

### ❌ Erro: "serviceAccountKey.json não encontrado"
**Solução:**
1. Verifique se o arquivo está na **pasta raiz**
2. Baixe novamente do Firebase Console
3. Confirme que o nome está correto

### ❌ Erro: "Firebase configuration"
**Solução:**
1. Verifique se atualizou **todos** os arquivos HTML
2. Confirme que as configurações estão corretas
3. Teste as configurações no console do Firebase

### ❌ Erro: "Porta 3001 em uso"
**Solução:**
```bash
# Windows
netstat -ano | findstr :3001
taskkill /PID <PID_NUMBER> /F

# Linux/Mac
lsof -ti:3001 | xargs kill -9
```

### ❌ Erro: "Authentication failed"
**Solução:**
1. Verifique se Authentication está ativado no Firebase
2. Confirme que Email/senha está habilitado
3. Teste criar usuário diretamente no Firebase Console

---

## 🔧 Configurações Avançadas

### 🌐 Alterando Porta
Edite `server.js`, linha 8:
```javascript
const PORT = process.env.PORT || 3001; // Altere aqui
```

### 👥 Configurando Administradores
Edite `html/dashboard.html`, linha 77:
```javascript
const adminEmails = [
    "admin@finanza.com",
    "seu_email@dominio.com"
].map(e => e.trim().toLowerCase());
```

### 🔒 Melhorando Segurança

#### Configurar HTTPS (Produção)
```javascript
// No server.js
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('path/to/private-key.pem'),
  cert: fs.readFileSync('path/to/certificate.pem')
};

https.createServer(options, app).listen(443);
```

---

## 📱 Acesso Mobile

### 🌐 Configurando Acesso via Rede Local

1. **Descubra seu IP local:**
```bash
# Windows
ipconfig

# Linux/Mac
ifconfig
```

2. **Acesse de outros dispositivos:**
   - `http://SEU_IP_LOCAL:3001`
   - Ex: `http://192.168.1.100:3001`

3. **Configure CORS se necessário** (já configurado)

---

## 🔄 Atualizações

### 📥 Atualizando Sistema
```bash
# Baixe atualizações
git pull origin main

# Atualize dependências
npm install

# Reinicie servidor
npm start
```

### 📊 Backup de Dados
Os dados ficam no Firebase, mas para backup local:
1. Use Firebase Console > Database > Exportar
2. Ou configure backup automático no Firebase

---

## 📞 Suporte Pós-Instalação

### 🆘 Em caso de problemas:

1. **Consulte** a seção de troubleshooting acima
2. **Verifique** logs do servidor no terminal
3. **Inspecione** console do navegador (F12)
4. **Revisite** cada etapa da instalação
5. **Abra** uma issue no GitHub com:
   - Descrição do problema
   - Sistema operacional
   - Versões do Node.js e NPM
   - Logs de erro completos

### 📚 Próximos Passos

Após instalação bem-sucedida:
- Leia o **Manual do Usuário** (`MANUAL_USUARIO.md`)
- Consulte **Documentação Técnica** (`DOCUMENTACAO_TECNICA.md`)
- Explore todas as funcionalidades
- Configure backup regular dos dados

---

**✅ Instalação concluída com sucesso!**

*Agora você pode começar a usar o Finanza Web para controlar suas finanças!*