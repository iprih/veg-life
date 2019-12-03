const mongoose = require('mongoose');//estabelece a conexão

const EstabelecimentosSchema = new mongoose.Schema({

    nomeEstabelecimento: { type: String },
    categoria: { type: String },
    tipoNegocio: { type: String},
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

const Estabelecimentos = mongoose.model('Estabelecimentos', EstabelecimentosSchema)

module.exports = Estabelecimentos