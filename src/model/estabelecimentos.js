const mongoose = require('mongoose');//estabelece a conexão

const EstabelecimentosSchema = new mongoose.Schema({

    nomeEstabelecimento: { type: String },
    cnpj: { type: Number },
    categoria: { type: String },
    tipoNegocio: { type: String},
    email: { type: String },
    endereco: { type: String },
    numero: { type: Number },
    cidade: { type: String },
    uf: { type: String },
    cep: { type: Number },
    diaSemana: { type: String },
    horario: { type: String },
    
    delivery: { type: Boolean }},
//     contato: [{ddd: { type: Number},
//          telefone: { type: Number }}]
// },
    { versionKey: false })

const Estabelecimentos = mongoose.model('Estabelecimentos', EstabelecimentosSchema)

module.exports = Estabelecimentos