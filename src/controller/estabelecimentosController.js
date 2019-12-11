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

//buscar por tipo de negocio, trazer nome, telefone e cardapoio
//buscar por cep
//na busca por categoria, trazer o cardapio

exports.updateEstabelecimento = (req, res) => {
    Estabelecimentos.findOneAndUpdate( 
        { cnpj: req.params.cnpj },
        { $set: req.body },
        { upsert: false },
        (err, estabelecimento) => {
            if (err) return res.status(500).send(err);

            if (!estabelecimento) return res.status(401).send({ mensagem: "Não localizamos o Estabelecimento para atualizar" });
            
            return res.status(200).send({ mensagem: "Estabelecimento atualizado com sucesso!" });
        });    
};


exports.deleteEstabelecimento = (req, res, next) => {
    Estabelecimentos.findOne({ "cnpj": req.params.cnpj }, function (err, estabelecimento) {
        if (err) res.status(500).send(err);

        if (!estabelecimento) return res.status(200).send({ mensagem: "Não localizamos o Estabelecimento para remover" });

        estabelecimento.remove(function (err) {
            if (!err) {
                res.status(200).send({ message: 'Estabelecimento removido com sucesso.' });
            }
        })
    })
};




