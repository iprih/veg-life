const Restaurantes = require("../model/restaurantes")

exports.post = (req, res) => {
    const restaurante = new Restaurantes(req.body)

    restaurante.save(function(err){
        if (err) res.status(500).send(err)
        else{
            res.status(201).sebd({
                status:true,
                mensagem: "Restaurante cadastrado com sucesso!"
            })
        }
    })
}