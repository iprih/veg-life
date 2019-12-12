const express = require("express")
const router = express.Router()
const controller = require("../controller/estabelecimentosController")

/**
 * @api {get} /estabelecimentos
 *
 * @apiGroup Estabelecimentos
 *
 * @apiSuccess {Object[{}]} Lista de Estabelecimentos
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *   [{    
 *   "nomeEstabelecimento": "Teste",
 *   "cnpj": 123456,
 *   "categoria": "Teste",
 *   "tipoNegocio": "Teste",
 *   "email": "Teste",
 *   "endereco": "Teste",
 *   "numero": "Teste",
 *   "cidade": "Teste",
 *   "uf": "Teste",
 *   "cep": 0800,
 *   "diaSemana": "Teste",
 *   "horario": "Teste"
 *   }]
 * 
 */ 
 router.get("/", controller.get)

router.post("/", controller.post)
router.get("/:categoria", controller.getByCategoria)
router.put("/:cnpj", controller.updateEstabelecimento)
router.delete("/:cnpj", controller.deleteEstabelecimento)

module.exports = router