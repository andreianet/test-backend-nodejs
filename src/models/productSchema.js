const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productsSchema = new Schema({
    _id:{
        type:mongoose.Schema.Types.ObjectId,
        auto:true,
        require:true
    },

    titulo:{
        type: String,
        required:true,
    },

    descricao:{
        type: String,
        required:true,
    },

    preco:{
        type: Number,
        required:true,
        maxValue: 4
    },

    categoria:{
        type: String,
        required:true,
    },
})

const productsCollection = mongoose.model('product', productsSchema);

module.exports = productsCollection;