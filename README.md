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

No desenvolvimento da web, "tokens da web" quase sempre se referem a JSON Web Token. JSON Web Token (JWT) é um padrão para criar tokens da web assinados digitalmente que contêm dados JavaScript Object Notation (JSON). Um servidor cria um token que comprova a identidade do cliente e o envia ao cliente. O JWT usa assinaturas digitais para provar que o token é legítimo.

### Componentes do JWT

1. **Cabeçalho**: fornece informações sobre o JWT — que tipo de token o JWT é e qual método foi usado para assiná-lo digitalmente. 

2. **Carga**: qualquer dado do JSON pode ficar aqui. As cargas de JWT para autenticação incluem declarações sobre a identidade do usuário na carga. Elas também podem incluir informações sobre as permissões do usuário, do servidor ou do endpoint de API. 

3. **Assinatura Digital**: a assinatura usa criptografia para assinar o cabeçalho e a carga com uma chave para garantir que os dados contidos sejam legítimos. Pense na assinatura digital como um selo inviolável em um frasco de remédio. 

### Quando usar JWT?

- **Autorização**: Este é o cenário mais comum para o uso do JWT. Depois que o usuário estiver autenticado, cada requisição subsequente incluirá o JWT, permitindo que o usuário acesse rotas, serviços e recursos permitidos com esse token. 

- **Troca de informações**: JSON Web Tokens são uma boa maneira de transmitir informações com segurança entre as partes. Como os JWTs podem ser assinados, por exemplo, usando pares de chaves pública e privada podemos garantir que os remetentes são quem dizem ser. 

### Vantagens do JWT

- **Autocontido**: As informações do usuário são armazenadas dentro do token, eliminando a necessidade de buscar dados em um banco de dados a cada requisição.

- **Segurança**: Os tokens são assinados digitalmente, o que significa que o receptor pode verificar a autenticidade do token e garantir que não foi alterado.

- **Escalabilidade**: Como o token é gerado e validado no lado do servidor, ele é fácil de ser escalado em microserviços.

- **Interoperabilidade**: JWTs são baseados em JSON, o que os torna fáceis de usar em diferentes plataformas e linguagens de programação.

### Criação e Verificação de Tokens JWT

1. **Criação do Token**: Ao autenticar um usuário, um servidor cria um JWT com as informações relevantes (como ID do usuário) e uma data de expiração.
O token é então assinado usando uma chave secreta.

2. **Verificação do Token**: Quando o cliente faz uma requisição autenticada, ele deve enviar o token no cabeçalho da requisição (normalmente em Authorization).
O servidor verifica a assinatura do token e se o token não expirou.

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
const MONGODB_URI=sua_uri_do_mongodb_aqui
```

4. Inicie o servidor:
```bash
node app.js
```

## Como Funciona o Sistema de Autenticação
### Geração do Token

1. 
