const mongoose = require('mongoose');//estabelece a conexão

const RestaurantesSchema = new mongoose.Schema({

    nome: { type: String },
    categoria: { type: String },
    // cardapio: [{
    //     comida: { type: String },
    //     bebida: { type: String },
    //     sobremesas: { type: String },
    //     doces: { type: String },
    //     lanches: { type: String }
    // }],
    email: { type: String },
    endereco: { type: String },
    numero: { type: Number },
    cidade: { type: String },
    uf: { type: String },
    cep: { type: Number },
    atendimento:[{
    	diasemana: { type: String },
    	horario: { type: String }
    }],
    delivery: { type: Boolean }, 
    telefone: { type: Number }
},
    { versionKey: false })

const Restaurantes = mongoose.model('Restaurantes', RestaurantesSchema)

module.exports = Restaurantes