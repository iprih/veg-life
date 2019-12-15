const mongoose = require('mongoose');//estabelece a conexão

const EstabelecimentosSchema = new mongoose.Schema({

    nomeEstabelecimento: { type: String, required: true },
    cnpj: { type: Number, required: true },
    categoria: { type: String, required: true },
    tipoNegocio: { type: String, required: true},
    email: { type: String, required: true },
    endereco: { type: String },
    numero: { type: Number },
    bairro: { type: String },
    cidade: { type: String },
    uf: { type: String },
    cep: { type: Number, required: true },
    diasAtendimento: { type: String, required: true },
    horariosAtendimento: { type: String, required: true },
    telefone: {type: Number, required: true},
    delivery: { type: Boolean }},
    { versionKey: false })

const Estabelecimentos = mongoose.model('Estabelecimentos', EstabelecimentosSchema)

module.exports = Estabelecimentos