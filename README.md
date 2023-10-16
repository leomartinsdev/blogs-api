# Blogs API ✍️📰
Aplicação back-end no formato de uma RESTful API de um CRUD para a produção de conteúdos de um blog.
<br><br>
O aplicativo foi desenvolvido utilizando Node.js, Express como framework para Node.js, Sequelize (ORM) e MySQL para gerenciamento do banco de dados e JWT para criação e validação de tokens. O projeto também foi dockerizado para que seja fácil executa-lo de qualquer máquina.
<br><br>

## Feito com 👨‍💻:
- JavaScript
- Docker
- Sequelize
- Express
- Routes
- Arquitetura em Camadas (MSC)
- MySQL
- JWT

## Como rodar o projeto
1) Usando Docker (recomendado):
-  Instale as dependências via terminal: `npm install` (esse passo não é estritamente necessário, mas recomendado para evitar possíveis problemas)
-  Também no terminal, inicie os containers: `docker-compose up -d --build`
-  Entre no terminal do container: `docker exec -it -blogs_api bash`
-  No terminal do container: `npm install`

2) Sem Docker:
-  Instale as dependêncais via termina: `npm install`
-  Inicie a aplicação: `env $(cat .env) npm run dev`
