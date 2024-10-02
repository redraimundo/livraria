# Biblioteca API

Uma API simples para gerenciamento de livros e usuários, com autenticação baseada em JWT. Este projeto permite registrar usuários, fazer login e gerenciar uma coleção de livros.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScrip no lado do servidor.
- **Express**: Framework para construção de aplicações web.
- **MongoDB**: Banco de dados NoSQL para armazenamento de dados.
- **Mongoose**: Biblioteca para modelagem de dados no MongoDB.
- **jsonwebtoken**: Biblioteca para gerar e verificar tokens JWT.
- **bcryptjs**: Biblioteca para hash e verificação de senhas.
- **dotenv**: Biblioteca para gerenciar variáveis de ambiente.

## O que é o JSON Web Token (JWT)?

blablablablabala

### Componentes do JWT

1. **Cabeçalho**: 

2. **Carga**:

3. **Assinatura Digital**:

### Quando usar JWT?

- **Autorização**:

- **Troca de informações**:

### Vantagens do JWT

- **Autocontido**:

- **Segurança**:

- **Escalabilidade**:

- **Interoperabilidade**: 

### Criação e Verificação de Tokens JWT

1. **Criação do Token**:

2. **Verificação do Token**:

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/redraimundo/livraria.git
cd livraria
```

2. Instale as dependências:
```bash
npm install express mongoose jsonwebtoken bcryptjs dotenv --save
```

3. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
```javascript
const JWT_SECRET=seu_segredo_aqui
MONGODB_URI=sua_uri_do_mongodb_aqui
```

4. Inicie o servidor:
```bash
node app.js
```

## Como Funciona o Sistema de Autenticação
### Geração do Token

1. 
