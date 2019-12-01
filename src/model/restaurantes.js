const mongoose = require('mongoose');//estabelece a conexão

const RestaurantesSchema = new mongoose.Schema({

nome: {type: String},
categoria: {type: String},
email: {type: String},
endereco: {type: String},
numero: {type: String},
cidade: {type: String},
uf: {type: String},
cep: {type: Number},
telefone: {type: Number}},
{versionKey: false})

const Restaurantes = mongoose.model('Restaurantes', RestaurantesSchema)

module.exports = Restaurantes