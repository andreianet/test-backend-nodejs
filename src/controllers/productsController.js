const productsCollection = require('../models/productSchema');

//Obtendo todos o produtos registrados 
const allProducts = (req, res) => {
    console.log(req.url);

    productsCollection.find((error, product) => {
        if (error) {
            return res.status(500).send(error)
        } else {
            return res.status(200).send(product)
        }
    })
}
//Registrar um Produto
const addProduct = (req, res) => {
    console.log(req.url);
    const productsBody = req.body;
    const product = new productsCollection(productsBody);
    product.save((error) => {
        console.log(product);
        if (error) {
            return res.status(400).send(error);
        } else {
            return res.status(201).send({
                message: 'Produto registrado com Sucesso',
                product
            })
        }
    })
}
//Atualizar Produto
const updateProducts = (req, res) => {
    const id = req.params.id
    const productBody = req.body
    const novo = {new: true} //retorna valor modificado
    productsCollection.findByIdAndUpdate(
        id,
        {$set: productBody}, //com os colchetes não funciona
        novo,
        (error, product) => {
            if (error){
                return res.status(500).send(error)
            }else if(product){
                return res.status(200).send({
                    message: 'Produto Atualizado com Sucesso',
                    product
                })
            }else{
                return res.sendStatus(404)
            }
        }             

    )
}
//Excluir produto
const delProduct = (req, res) => {
    const id = req.params.id
    productsCollection.findByIdAndDelete(id,(error, product) =>{
        if (error) {
            return res.status(500).send({
                message: 'Ocorreu um erro, verificar!',
                error
            })
        }else{
            if (product) {
                return res.status(200).send("Produto Deletado com Sucesso!")
            }else{
                return res.status(400)
            }
        }
    })
}
//Busca por ID
const ProductById = (req, res) => {
    const id = req.params.id
    productsCollection.findById(id,(error, product) => {
        if (error) {
            return res.status(500).send(error);            
        }else{
            if (product){
                res.status(200).send(product)
            }else{
                return res.status(404).send('Produto não encontrado: ( ')
            }
        }
    })
}
//Busca por descricao do Produto 
const getProductPorNome = (req, res) => {
    const nome = req.params.descricao
    productsCollection.find({descricao: nome},(error, descricao) => {
        if (error) {
            return res.status(500).send(error);            
        }else if(descricao == ''){
            return res.status(404).send('Produto não encontrado!')
        }else{
            return res.status(200).send({
                message: 'Produto encontrado!',
                descricao
            })
        }
    })
    
}
//Busca por categoria do produto
const getProductPorCategoria = (req, res) => {
    const catParam = req.params.categoria
    productsCollection.find({categoria: catParam},(error, categoria) => {
        if (error) {
            return res.status(500).send(error);
        }else if(categoria == ''){
            return res.status(404).send('Categoria não encontrada!')
        }else{
            return res.status(200).send({
                message: 'Categoria encontrada!',
                categoria
            })
        }
    }).sort({categoria:1})
    
}
module.exports = {
    addProduct,
    allProducts,
    updateProducts,
    delProduct,
    ProductById,
    getProductPorNome,   
    getProductPorCategoria
}