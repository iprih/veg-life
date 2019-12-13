const express = require("express")
const router = express.Router()
const controller = require("../controller/estabelecimentosController")

/**
 * @api {get} /estabelecimentos
 * @apiName GetEstabelecimentos
 * @apiGroup GetEstabelecimentos
 *
 *
 * @apiSuccess {Object[]} Retorna estabelecimentos cadastrados.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
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
 * @apiError Internal Server Error.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Internal Server Error"
 *     }
 */
 router.get("/", controller.get)

/**
 * @api {post} /estabelecimentos
 * @apiGroup PostEstabelecimentos
 * @apiParam (Request Body) {String} nomeEstabelecimento         Nome do estabelecimento
 * @apiParam (Request Body) {Number} cnpj                        Cnpj
 * @apiParam (Request Body) {String} categoria                   Vegano, Ovolactovegetariano ou Lactovegetariano
 * @apiParam (Request Body) {String} tipoNegocio                 Restaurante, Bar-Lanchonete ou Pizzaria
 * @apiParam (Request Body) {String} email                       Email do estabelecimento
 * @apiParam (Request Body) {String} endereco                    Endereço do estabelecimento
 * @apiParam (Request Body) {Number} numero                      Número do estabelecimento
 * @apiParam (Request Body) {String} cidade                      Cidade
 * @apiParam (Request Body) {String} uf                          UF
 * @apiParam (Request Body) {String} cep                         CEP do estabelecimento  
 * @apiParam (Request Body) {String} diaSemana                   Dias de atendimento do estabelecimento
 * @apiParam (Request Body) {String} horario                     Horario de atendimento do estabelecimento
 * 
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 201 Created
 *   {
 *       status: true,
 *       mensagem: "Estabelecimento cadastrado com sucesso!"
 *   }
 * @apiError Internal Server Error.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Internal Server Error"
 *     }
 * 
 */
//geo
//
router.post("/", controller.post)

/**
 * @api {get} /estabelecimentos
 * @apiName GetEstabelecimentos
 * @apiGroup GetEstabelecimentos
 *
 *
 * @apiSuccess {Object[]} Retorna estabelecimentos cadastrados.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
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
 * @apiError Internal Server Error.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Internal Server Error"
 *     }
 */




router.get("/:categoria", controller.getByCategoria)





router.put("/:cnpj", controller.updateEstabelecimento)







router.delete("/:cnpj", controller.deleteEstabelecimento)

module.exports = router