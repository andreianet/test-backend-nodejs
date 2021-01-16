const express = require('express')
const router = express.Router()
const controller = require('../controllers/productsController')

//@Description: Get 
router.get('/', controller.allProducts)

//Por id
router.get('/:id', controller.ProductById)

//busca por nodemon
router.get('/:nome', controller.getProductPorNome)

//@Description: Post - Criar novos product
router.post('/registrar', controller.addProduct)

//@Description: PUT - Atualizar produto por ID
router.put('/:id', controller.updateProducts)

//@Description: DELETE - Deletar um produto por ID
router.delete('/:id', controller.delProduct)


module.exports = router