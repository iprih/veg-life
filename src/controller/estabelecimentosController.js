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

exports.getByCategoria = (req, res, next) => {
    const categoria = req.params.categoria
    Estabelecimentos.find({categoria}, function(err, estabelecimentos){
        if (err) res.status(500).send(err);
        const infos = estabelecimentos.map(estabelecimento => {
            return{
                nome: estabelecimento.nomeEstabelecimento,
                tipoNegocio: estabelecimento.tipoNegocio,
                bairro: estabelecimento.bairro,
                telefone: estabelecimento.telefone,
                diasAtendimento: estabelecimento.diasAtendimento,
                horariosAtendimento: estabelecimento.horariosAtendimento
            }
        })
        res.status(200).send(infos)
    })
}

exports.getByTipoNegocio = (req, res, next) => {
    const tipoNegocio = req.params.tipoNegocio
    Estabelecimentos.find({tipoNegocio}, function(err, estabelecimentos){
        if (err) res.status(500).send(err);
        const infosnegocio = estabelecimentos.map(estabelecimento => {
            return{
                nome: estabelecimento.nomeEstabelecimento,
                categoria: estabelecimento.categoria,
                bairro: estabelecimento.bairro,
                telefone: estabelecimento.telefone,
                diasAtendimento: estabelecimento.diasAtendimento,
                horariosAtendimento: estabelecimento.horariosAtendimento
                
              }       
        })
        res.status(200).send(infosnegocio)

    })
}

exports.updateEstabelecimento = (req, res) => {
    Estabelecimentos.findOneAndUpdate( 
        { cnpj: req.params.cnpj },
        { $set: req.body },
        { upsert: true },
        (err, estabelecimento) => {
            if (err) return res.status(500).send(err);

            if (!estabelecimento) return res.status(404).send({ mensagem: "Não localizamos o Estabelecimento para atualizar" });
            
            return res.status(200).send({ mensagem: "Estabelecimento atualizado com sucesso!" });
        });    
};


exports.deleteEstabelecimento = (req, res, next) => {
    Estabelecimentos.findOne({ "cnpj": req.params.cnpj }, function (err, estabelecimento) {
        if (err) res.status(500).send(err);

        if (!estabelecimento) return res.status(404).send({ mensagem: "Não localizamos o Estabelecimento para exclusão!" });

        estabelecimento.remove(function (err) {
            if (!err) {
                res.status(200).send({ message: 'Estabelecimento removido com sucesso!' });
            }
        })
    })
};




