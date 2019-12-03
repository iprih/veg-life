const Estabelecimentos = require("../model/estabelecimentos")

exports.post = (req, res) => {
    const estabelecimento = new Estabelecimentos(req.body)

    estabelecimento.save(function(err){
        if (err) res.status(500).send(err)
        else{
            res.status(201).send({
                status:true,
                mensagem: "Estabelecimento cadastrado com sucesso!"
            })
        }
    })
}

exports.getAll = (req, res) => {
    Estabelecimentos.find(function(err, estabelecimentos){
        if (err) res.status(500).send(err);
        res.status(200).send(estabelecimentos)
    })
}

exports.getByCategoria = (req, res) => {
    const categoria = req.params.categoria
    Estabelecimentos.find({categoria}, function(err, estabelecimentos){
        if (err) res.status(500).send(err);
        const nomes = estabelecimentos.map(estabelecimento => {
            return{
                nome: estabelecimento.nomeEstabelecimento,
                telefone: estabelecimento.telefone
            }
        })
        res.status(200).send(nomes)
    })
}

