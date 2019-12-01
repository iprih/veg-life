const Restaurantes = require("../model/restaurantes")

exports.post = (req, res) => {
    const restaurante = new Restaurantes(req.body)

    restaurante.save(function(err){
        if (err) res.status(500).send(err)
        else{
            res.status(201).send({
                status:true,
                mensagem: "Restaurante cadastrado com sucesso!"
            })
        }
    })
}

exports.get = (req, res) => {
    Restaurantes.find(function(err, restaurantes){
        if (err) res.status(500).send(err);
        res.status(200).send(restaurantes)
    })
}