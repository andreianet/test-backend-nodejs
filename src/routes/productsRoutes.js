const express = require('express')
const router = express.Router()
const controller = require('../controllers/productsController')

//@Description: Get 
router.get('/', controller.allProducts)

//@Description: Get Por id
router.get('/:id', controller.ProductById)

//@Description: Get por descricao do Produto
router.get('/prod/:descricao', controller.getProductPorNome)
//@Description: Get por Categoria do Produto
router.get('/categoria/:categoria', controller.getProductPorCategoria)

//@Description: Post - Criar novo Produto
router.post('/registrar', controller.addProduct)

//@Description: PUT - Atualizar produto por ID
router.put('/:id', controller.updateProducts)

//@Description: DELETE - Deletar um produto por ID
router.delete('/:id', controller.delProduct)


module.exports = router