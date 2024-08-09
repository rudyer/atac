# BACK-END
Back-end para suprir as necessidades do teste.

## Features

- Registrar usuário
- Buscar todos usuários
- Filtrar direto na tabela
- Criar rota passando por todos os cadastros


## Tecnologias

- [node.js]  - Utilizando TypeScript para criação dos arquivos
- [Express]  - Framework para requisições
- [Postgresql] - Banco de dados 

## Installation

É necessario [Node.js](https://nodejs.org/) v22.06 para rodar.

Instalar dependencias para poder executar a aplicação

```sh
cd back-end
npm i
npm run dev
```


## Docker
Comando inical
```sh
docker run -d --name test_atac_postgres  -e POSTGRES_PASSWORD=atacpostgres  -e POSTGRES_USER=testatac  -e POSTGRES_DB=cleanerapp -p 5432:5432 postgres
```
Acessar banco
```sh 
psql -h localhost -U testatac -d cleanerapp
```

Criar tabela
```sh 
CREATE TABLE users (id SERIAL PRIMARY KEY,username VARCHAR(80),email VARCHAR(255),phone VARCHAR(20),x INT,y INT,created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP);

```
## API

- Adicionar Usuario:
 ```sh 
curl -X POST http://localhost:3030/users/addUser \
     -H "Content-Type: application/json" \
     -d '{
           "username": "Atac teste",
           "email": "ata@atac.com",
           "phone": "+55555555",
           "x": 10,
           "y": 5
         }'
```
 - [GET-User] - Buscar usuário
 - [GET-Route] - Buscar rota
## License

MIT

   [node.js]: <http://nodejs.org>
   [Postgresql]: <https://www.postgresql.org>
   [express]: <http://expressjs.com>
   [GET-User]:<http://localhost:3030/users/>
   [GET-Route]: <http://localhost:3030/users/route>
