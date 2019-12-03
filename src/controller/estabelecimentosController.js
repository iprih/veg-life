const Restaurantes = require("../model/estabelecimentos")

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

exports.get = (req, res) => {
    Estabelecimentos.find(function(err, estabelecimentos){
        if (err) res.status(500).send(err);
        res.status(200).send(estabelecimentos)
    })
}