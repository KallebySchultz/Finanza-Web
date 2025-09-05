# 💰 Finanza Web - Sistema de Gestão Financeira Pessoal

![Logo Finanza](IMAGENS/logo.png)

## 📋 Índice

1. [Sobre o Projeto](#sobre-o-projeto)
2. [Propósito e Diferencial](#propósito-e-diferencial)
3. [Tecnologias Utilizadas](#tecnologias-utilizadas)
4. [Funcionalidades](#funcionalidades)
5. [Arquitetura do Sistema](#arquitetura-do-sistema)
6. [Instalação e Configuração](#instalação-e-configuração)
7. [Como Usar](#como-usar)
8. [Estrutura de Arquivos](#estrutura-de-arquivos)
9. [Componentes Técnicos](#componentes-técnicos)
10. [Firebase e Banco de Dados](#firebase-e-banco-de-dados)
11. [Desenvolvimento](#desenvolvimento)
12. [Troubleshooting](#troubleshooting)

---

## 🎯 Sobre o Projeto

**Finanza Web** é um sistema completo de gestão financeira pessoal desenvolvido para auxiliar usuários no controle de suas finanças de forma intuitiva e eficiente. O sistema oferece uma experiência desktop local, com sincronização em nuvem através do Firebase, proporcionando segurança, performance e acessibilidade.

### 🌟 Visão Geral

O Finanza Web foi criado para resolver a necessidade de um controle financeiro pessoal robusto, que combine:
- **Simplicidade de uso** para usuários não técnicos
- **Segurança de dados** através do Firebase
- **Performance local** com servidor Node.js
- **Interface moderna** e responsiva
- **Funcionalidades completas** de gestão financeira

---

## 🚀 Propósito e Diferencial

### 📌 Por que o Finanza Web foi criado?

O projeto nasceu da necessidade de ter uma ferramenta de gestão financeira que seja:

1. **Privada e Segura**: Dados armazenados no Firebase com autenticação robusta
2. **Rápida**: Interface local que não depende de conexão constante
3. **Completa**: Todas as funcionalidades necessárias para controle financeiro
4. **Acessível**: Interface em português, intuitiva e fácil de usar
5. **Multiplataforma**: Funciona em qualquer sistema operacional com navegador

### 🏆 Principais Diferenciais

- **🖥️ Aplicação Desktop Local**: Roda localmente, garantindo velocidade e privacidade
- **☁️ Sincronização em Nuvem**: Dados seguros no Firebase com acesso de qualquer lugar
- **📊 Visualizações Inteligentes**: Gráficos e dashboards para análise financeira
- **🔐 Autenticação Robusta**: Sistema seguro de login e gestão de usuários
- **📱 Interface Responsiva**: Funciona perfeitamente em desktop e dispositivos móveis
- **🇧🇷 Totalmente em Português**: Interface e documentação em português brasileiro

### 🎯 Para quem foi projetado?

- **Pessoas físicas** que querem controlar suas finanças pessoais
- **Famílias** que precisam organizar orçamento doméstico
- **Pequenos empreendedores** que desejam controle financeiro simples
- **Estudantes** aprendendo educação financeira
- **Qualquer pessoa** que queira ter controle total sobre seus gastos e receitas

---

## 🛠️ Tecnologias Utilizadas

### 🔧 Backend
- **Node.js** (v18.19.0+) - Runtime JavaScript
- **Express.js** (v4.21.2) - Framework web
- **Firebase Admin SDK** (v13.5.0) - Integração com Firebase
- **JSON Web Token** (v9.0.2) - Autenticação
- **CORS** (v2.8.5) - Controle de acesso
- **Body-parser** (v2.2.0) - Parse de requisições

### 🎨 Frontend
- **HTML5** - Estrutura das páginas
- **CSS3** - Estilização e design responsivo
- **JavaScript Vanilla** - Lógica do frontend
- **Firebase SDK** (v9.23.0) - Autenticação e banco de dados
- **Chart.js** - Gráficos e visualizações

### ☁️ Infraestrutura
- **Firebase Authentication** - Sistema de login
- **Firebase Realtime Database** - Banco de dados em tempo real
- **Firebase Hosting** (opcional) - Deploy em produção

### 🔨 Ferramentas de Desenvolvimento
- **NPM** - Gerenciador de pacotes
- **Nodemon** (dev) - Hot reload para desenvolvimento
- **Git** - Controle de versão

---

## ⚡ Funcionalidades

### 🔐 Sistema de Autenticação
- **Registro de usuários** com email e senha
- **Login seguro** com validação Firebase
- **Recuperação de senha** (através do Firebase)
- **Sessões persistentes** com tokens JWT
- **Logout seguro** com limpeza de sessão

### 📊 Dashboard Principal
- **Visão geral financeira** com métricas principais
- **Saldo total** atualizado em tempo real
- **Receitas e despesas do mês** atual
- **Número de contas cadastradas**
- **Gráfico de despesas por categoria**
- **Resumo textual** da situação financeira

### 🏦 Gestão de Contas
- **Cadastro de contas** (corrente, poupança, cartão, investimentos)
- **Edição de informações** das contas
- **Exclusão de contas** (com confirmação)
- **Visualização de saldo** por conta
- **Histórico de movimentações** por conta

### 💸 Controle de Transações
- **Registro de receitas** e despesas
- **Categorização** de transações
- **Associação com contas** específicas
- **Data e descrição** detalhadas
- **Edição e exclusão** de transações
- **Filtros por período** e categoria

### 🏷️ Sistema de Categorias
- **Categorias personalizadas** para receitas e despesas
- **Cores distintas** para identificação visual
- **Gestão completa** (criar, editar, excluir)
- **Relatórios por categoria**

### 👤 Perfil do Usuário
- **Dados pessoais** editáveis
- **Configurações de conta**
- **Histórico de atividades**
- **Preferências do sistema**

### 👑 Painel Administrativo
- **Gestão de usuários** (para administradores)
- **Estatísticas do sistema**
- **Configurações globais**
- **Logs de atividade**

---

## 🏗️ Arquitetura do Sistema

### 📐 Arquitetura Geral

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │    │   Firebase      │
│   (HTML/CSS/JS) │◄──►│   (Node.js)     │◄──►│   (Database)    │
│                 │    │                 │    │                 │
│ • Interface     │    │ • API REST      │    │ • Authentication│
│ • Interações    │    │ • Middleware    │    │ • Realtime DB   │
│ • Validações    │    │ • Autenticação  │    │ • Storage       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### 🔄 Fluxo de Dados

1. **Cliente** faz requisição através da interface web
2. **Frontend** processa interação e envia para backend
3. **Backend** autentica e valida a requisição
4. **Firebase** processa dados e retorna resposta
5. **Backend** formata resposta e envia para frontend
6. **Frontend** atualiza interface com novos dados

### 🔐 Segurança

- **Autenticação JWT** em todas as rotas protegidas
- **Validação de tokens** Firebase no backend
- **CORS** configurado para segurança
- **Sanitização** de dados de entrada
- **Criptografia** de dados sensíveis

---

## 📦 Instalação e Configuração

### 📋 Pré-requisitos

- **Node.js** versão 18.19.0 ou superior
- **NPM** versão 8.0.0 ou superior
- **Git** para clonagem do repositório
- **Conta Firebase** configurada
- **Navegador web** moderno (Chrome, Firefox, Edge)

### 🔧 Passo a Passo da Instalação

#### 1. Clone o Repositório
```bash
git clone https://github.com/KallebySchultz/Finanza-Web.git
cd Finanza-Web
```

#### 2. Instale as Dependências
```bash
npm install
```

#### 3. Configure o Firebase

3.1. Acesse o [Console do Firebase](https://console.firebase.google.com/)

3.2. Crie um novo projeto ou use existente

3.3. Ative **Authentication** e **Realtime Database**

3.4. Baixe o arquivo `serviceAccountKey.json` das configurações do projeto

3.5. Coloque o arquivo na raiz do projeto

#### 4. Configure as Variáveis do Firebase

Edite os arquivos que contêm a configuração do Firebase com suas credenciais:

- `server.js` (linha 17)
- `html/dashboard.html` (linha 64)
- `html/login.html` (linha 44)
- E outros arquivos HTML conforme necessário

#### 5. Inicie o Servidor

**Opção 1 - Manual:**
```bash
npm start
```

**Opção 2 - Usando o script Windows:**
```bash
start_finanza.bat
```

**Opção 3 - Modo desenvolvimento:**
```bash
npm run dev
```

#### 6. Acesse a Aplicação

Abra seu navegador e acesse: `http://localhost:3001`

### ⚙️ Configurações Adicionais

#### Configuração de Administradores

No arquivo `html/dashboard.html`, linha 77, adicione emails de administradores:

```javascript
const adminEmails = [
    "admin@finanza.com", 
    "seu_email_admin@dominio.com",
    "kallebyschultz@gmail.com"
].map(e => e.trim().toLowerCase());
```

#### Configuração da Porta

Para alterar a porta padrão (3001), edite o arquivo `server.js`:

```javascript
const PORT = process.env.PORT || 3001; // Altere aqui
```

---

## 📖 Como Usar

### 🚀 Primeiro Acesso

1. **Acesse** `http://localhost:3001`
2. **Clique** em "Não tem conta? Cadastre-se"
3. **Preencha** seus dados de registro
4. **Confirme** o email (se configurado)
5. **Faça login** com suas credenciais

### 🏠 Usando o Dashboard

1. **Visualize** suas métricas financeiras principais
2. **Analise** o gráfico de despesas por categoria
3. **Navegue** pelos menus para diferentes funcionalidades

### 🏦 Gerenciando Contas

1. **Acesse** "Contas" no menu lateral
2. **Clique** "Nova Conta" para adicionar
3. **Preencha** nome, tipo e saldo inicial
4. **Salve** para confirmar criação

### 💰 Registrando Transações

1. **Acesse** "Transações" no menu
2. **Clique** "Nova Transação"
3. **Preencha** descrição, valor, tipo (receita/despesa)
4. **Selecione** conta e categoria
5. **Defina** a data da transação
6. **Salve** para registrar

### 🏷️ Criando Categorias

1. **Acesse** "Categorias" no menu
2. **Clique** "Nova Categoria"
3. **Defina** nome e cor
4. **Especifique** se é para receita ou despesa
5. **Salve** para criar

### 👤 Editando Perfil

1. **Acesse** "Perfil" no menu
2. **Edite** informações pessoais
3. **Altere** senha se necessário
4. **Salve** alterações

---

## 📁 Estrutura de Arquivos

```
Finanza-Web/
├── 📄 README.md                    # Esta documentação
├── 📄 package.json                 # Configurações NPM
├── 📄 server.js                    # Servidor principal Node.js
├── 📄 index.html                   # Página inicial
├── 📄 start_finanza.bat           # Script de inicialização Windows
├── 🔑 serviceAccountKey.json       # Credenciais Firebase (não versionado)
│
├── 📁 html/                        # Páginas HTML
│   ├── 📄 login.html              # Página de login
│   ├── 📄 register.html           # Página de registro
│   ├── 📄 dashboard.html          # Dashboard principal
│   ├── 📄 accounts.html           # Gestão de contas
│   ├── 📄 transactions.html       # Gestão de transações
│   ├── 📄 categories.html         # Gestão de categorias
│   ├── 📄 profile.html            # Perfil do usuário
│   └── 📄 admin.html              # Painel administrativo
│
├── 📁 css/                         # Estilos CSS
│   ├── 📄 common.css              # Estilos comuns
│   ├── 📄 auth.css                # Estilos de autenticação
│   └── 📄 dashboard.css           # Estilos do dashboard
│
├── 📁 js/                          # Scripts JavaScript
│   ├── 📄 auth.js                 # Lógica de autenticação
│   ├── 📄 api.js                  # Comunicação com API
│   ├── 📄 firebase-api.js         # Interface Firebase
│   ├── 📄 backend.js              # Lógica backend
│   └── 📄 navigation.js           # Navegação SPA
│
├── 📁 IMAGENS/                     # Assets visuais
│   └── 🖼️ logo.png               # Logo do sistema
│
├── 📁 assets/                      # Outros assets
└── 📁 node_modules/               # Dependências NPM
```

### 📄 Descrição dos Arquivos Principais

#### `server.js`
Servidor principal Node.js/Express que:
- Configura rotas da API
- Implementa middleware de autenticação
- Integra com Firebase Admin SDK
- Serve arquivos estáticos

#### `index.html`
Página de entrada que redireciona para login

#### `html/dashboard.html`
Dashboard principal com:
- Métricas financeiras
- Gráficos de despesas
- Navegação principal

#### `html/login.html` e `html/register.html`
Sistema de autenticação com Firebase

#### `css/common.css`
Estilos base do sistema:
- Reset CSS
- Layout responsivo
- Componentes reutilizáveis
- Tema visual

#### `js/auth.js`
Lógica de autenticação:
- Login/logout
- Validação de sessão
- Redirecionamentos

---

## 🔧 Componentes Técnicos

### 🖥️ Backend (Node.js/Express)

#### Middleware de Autenticação
```javascript
function authRequired(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: 'Token ausente.' });
  const token = auth.replace('Bearer ', '');
  admin.auth().verifyIdToken(token)
    .then(decodedToken => {
      req.user = decodedToken;
      next();
    })
    .catch(() => res.status(401).json({ error: 'Token inválido ou expirado.' }));
}
```

#### Rotas Principais
- `GET /` - Página inicial
- `GET /auth/me` - Dados do usuário logado
- `POST /auth/me` - Atualizar dados do usuário
- `GET /api/financialSummary` - Resumo financeiro

### 🌐 Frontend (JavaScript Vanilla)

#### Configuração Firebase
```javascript
const firebaseConfig = {
    apiKey: "AIzaSyAtmg3jhdlvF_GJmfLRt_bHCGRw_nWSMCo",
    authDomain: "finanza-2cd68.firebaseapp.com",
    databaseURL: "https://finanza-2cd68-default-rtdb.firebaseio.com",
    projectId: "finanza-2cd68",
    // ... outras configurações
};
firebase.initializeApp(firebaseConfig);
```

#### Gestão de Estado
- **localStorage** para sessão local
- **Firebase Realtime Database** para sincronização
- **Listeners** para atualizações em tempo real

### 📊 Visualizações (Chart.js)

#### Gráfico de Despesas por Categoria
```javascript
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: categorias,
        datasets: [{
            label: 'Gastos por despesa (R$)',
            data: valores,
            backgroundColor: '#f56565'
        }]
    }
});
```

---

## 🔥 Firebase e Banco de Dados

### 📊 Estrutura do Banco de Dados

```
finanza-database/
├── usuarios/
│   └── {uid}/
│       ├── nome: string
│       ├── email: string
│       ├── saldo_total: number
│       ├── receitas_mes: number
│       ├── despesas_mes: number
│       └── total_contas: number
│
├── contas/
│   └── {uid}/
│       └── {conta_id}/
│           ├── nome: string
│           ├── tipo: string
│           ├── saldo: number
│           └── data_criacao: timestamp
│
├── transacoes/
│   └── {uid}/
│       └── {transacao_id}/
│           ├── descricao: string
│           ├── valor: number
│           ├── tipo: 'receita' | 'despesa'
│           ├── conta_id: string
│           ├── categoria_id: string
│           ├── data: timestamp
│           └── data_criacao: timestamp
│
└── categorias/
    └── {uid}/
        └── {categoria_id}/
            ├── nome: string
            ├── cor: string
            ├── tipo: 'receita' | 'despesa'
            └── data_criacao: timestamp
```

### 🔐 Regras de Segurança Firebase

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

### 🔄 Sincronização em Tempo Real

O sistema utiliza `onValue()` do Firebase para atualizações automáticas:

```javascript
const transRef = firebase.database().ref('transacoes/' + user.uid);
transRef.on('value', snapshot => {
    // Atualiza interface automaticamente
    atualizarDashboard(snapshot.val());
});
```

---

## 👨‍💻 Desenvolvimento

### 🛠️ Configuração do Ambiente de Desenvolvimento

1. **Clone** o repositório
2. **Instale** dependências: `npm install`
3. **Configure** Firebase
4. **Execute** modo desenvolvimento: `npm run dev`

### 📝 Scripts Disponíveis

```json
{
  "scripts": {
    "start": "node server.js",           // Produção
    "dev": "nodemon server.js"           // Desenvolvimento
  }
}
```

### 🧪 Estrutura de Testes

Atualmente o projeto não possui testes automatizados. Para implementar:

```bash
npm install --save-dev jest supertest
```

### 🔄 Workflow de Desenvolvimento

1. **Crie** uma branch para nova feature
2. **Desenvolva** a funcionalidade
3. **Teste** localmente
4. **Faça** commit com mensagem descritiva
5. **Abra** Pull Request

### 📋 Convenções de Código

- **Indentação**: 2 espaços
- **Nomenclatura**: camelCase para variáveis, PascalCase para classes
- **Comentários**: Em português
- **Strings**: Aspas simples para JavaScript, aspas duplas para HTML

---

## 🚨 Troubleshooting

### ❌ Problemas Comuns

#### 1. Erro de conexão com Firebase
**Sintoma**: "Token inválido ou expirado"
**Solução**: 
- Verifique se `serviceAccountKey.json` existe
- Confirme configurações do Firebase
- Verifique regras de segurança

#### 2. Servidor não inicia
**Sintoma**: "Cannot start server"
**Solução**:
- Verifique se porta 3001 está livre: `netstat -ano | findstr :3001`
- Execute `npm install` novamente
- Verifique versão do Node.js: `node --version`

#### 3. Dependências não instaladas
**Sintoma**: "Module not found"
**Solução**:
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

#### 4. Problemas de autenticação
**Sintoma**: Usuário não consegue fazer login
**Solução**:
- Limpe localStorage: `localStorage.clear()`
- Verifique configuração de Authentication no Firebase
- Confirme regras de segurança do banco

#### 5. Gráficos não carregam
**Sintoma**: Dashboard sem gráficos
**Solução**:
- Verifique se Chart.js está carregando
- Confirme dados no Firebase
- Verifique console do navegador para erros

### 🔧 Comandos Úteis para Debug

```bash
# Verificar logs do servidor
npm start > server.log 2>&1

# Verificar dependências
npm ls

# Verificar vulnerabilidades
npm audit

# Limpar cache npm
npm cache clean --force

# Reinstalar dependências
rm -rf node_modules package-lock.json && npm install
```

### 📞 Suporte

Para problemas não listados:

1. **Verifique** os logs do servidor
2. **Consulte** console do navegador
3. **Revise** configurações do Firebase
4. **Abra** uma issue no GitHub com:
   - Descrição do problema
   - Passos para reproduzir
   - Logs de erro
   - Ambiente (OS, Node.js version, etc.)

---

## 📄 Licença

Este projeto é desenvolvido para fins educacionais e de aprendizado. 

---

## 👥 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. **Fork** o projeto
2. **Crie** uma branch para sua feature
3. **Desenvolva** e teste suas alterações
4. **Faça** commit com mensagens claras
5. **Abra** um Pull Request

---

## 📚 Recursos Adicionais

- [Documentação Firebase](https://firebase.google.com/docs)
- [Node.js Documentation](https://nodejs.org/docs)
- [Express.js Guide](https://expressjs.com/guide)
- [Chart.js Documentation](https://www.chartjs.org/docs)

---

**Desenvolvido com ❤️ para gestão financeira pessoal**

*Última atualização: Dezembro 2024*