const express = require('express')
const router = express.Router()
const controller = require('../controllers/productsController')

//@Description: Get 
router.get('/', controller.allProducts)

//@Description: Post - Criar novos product
router.post('/registrar', controller.addProduct)

//@Description: PUT - Atualizar produto por ID
router.put('/{id}', controller.updateProducts)


module.exports = router