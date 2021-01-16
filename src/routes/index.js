const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
    res.status(200).send({
        titulo: "Cátalogo de Produtos - Desafio - AnotaAí",
        version: "1.0.0"
    })
})
module.exports = router