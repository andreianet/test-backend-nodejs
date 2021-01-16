<h1>API de Cátalogo de Produtos</h1>

Desenvolvido um cátalogo de produto, contendo: título, descrição, preço, categoria.
Neste cadastro é possível, realizar as quatro operações básicas, no banco de dados, ou seja, 
implementado o CRUD, sendo assim é possível: Criar, Listar, Atualizar e Deletar.
O projeto foi desenvolvido na Arquitetura MVC, podendo ter uma melhor estrutura do projeto.

### Estrutura do projeto:
```
 📁 test-backend-nodejs
   |- 📁 node_modules 
   |- 📁 src
   |    |- 📁 controller
   |         📄 productControlle.js
   |    |- 📁 models
   |         📄 productSchema.js
   |         📄 repository.js
   |    |- 📁 routes
   |         📄 index.js
   |         📄 productRoutes.js
   |    |- 📄 app.js
   |    
   |-.gitignore
   |- 📄 package-lock.json 
   |- 📄 package.json
   |- 📄 README.md  
   |- 📄 server.js
```

<strong>Tecnologias e Ferramentas utilizadas:</strong>
- NodeJS
- JavaScript
- NPM
- Express
- Cors
- Mongoose
- mongodb
- Postman
- VSCode 
 
<strong>Métodos HTTP Utilizados e Endpoints</strong>
|Métodos            |Caminhos                                      |  Descrição                       |
|-------------------|----------------------------------------------|----------------------------------|
|GET                |localhost:3000/                               | Index                            |
|GET                |localhost:3000/product                        |Lista todos os produtos           |
|GET                |localhost:3000/product/:{id}                  |Lista Produto por ID              |
|GET                |localhost:3000/product/prod/:{descricao}      |Lista Produto por descricao       |
|GET                |localhost:3000/product/categoria/:{categoria} |Lista Produto por categoria       |
|POST               |localhost:3000/product/registrar              |Registra um novo Produto          |
|PUT                |localhost:3000/product/:{id}                  |Atualiza um Produto pelo ID       |
|DELETE             |localhost:3000/product/:{id}                  |Deleta um produto pelo ID         |

<strong>Agradecimentos</strong>
Agradeço por participar do processo e do desafio em si. Obrigada *AnotaAi*!
Aprendi e revisei muitos conceitos nesse desafio.

