<h1>API de Cátalogo de Produtos</h1>

Desenvolvido um cátalogo de produto, contendo: título, descrição, preço, categoria.
Neste cadastro é possível, realizar as quatro operações básicas, no banco de dados, ou seja, 
implementado o CRUD, sendo assim é possível: Criar, Listar, Atualizar e Deletar.
O projeto foi desenvolvido no padrão MVC, podendo ter uma melhor estrutura do projeto.

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
|Métodos            |Caminhos                           |  Descrição                       |
|-------------------|-----------------------------------|----------------------------------|
|GET                |localhost:3000/                    | Index de Apresentação            |
|GEt                |localhost:3000/product             |Lista todos os produtos           |
|GEt                |localhost:3000/product/:{id}       |Lista Produto por ID              |
|GEt                |localhost:3000/product/:{descricao}|Lista Produto por descricao       |
|POST               |localhost:3000/product/registrar   |Registra um novo Produto          |
|PUT                |localhost:3000/product/:{id}       |Atualiza um Produto pelo ID       |
|DELETE             |localhost:3000/product/:{id}       |Deleta um produto pelo ID         |

 

