const express = require("express")
const router = express.Router()
const controller = require("../controller/estabelecimentosController")

/**
 * @api {get} /estabelecimentos
 * @apiName Estabelecimentos Cadastrados
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
 * @apiError (500) serverError
 *
 *  @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Internal Server Error"
 *     }
 */
 router.get("/", controller.get)

/**
 * @api {post} /estabelecimentos
 * @apiName Cadastro de Estabelecimentos
 * @apiGroup PostEstabelecimentos
 * 
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
 * @apiError (500) serverError
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Internal Server Error"
 *     }
 * 
 */

router.post("/", controller.post)

/**
 * @api {get} /estabelecimentos/:categoria
 * @apiName Estabelecimentos por Categoria
 * @apiGroup GetEstabelecimentos
 * @apiParam {String} Categoria
 *
 * @apiSuccess {Object[]} Retorna Estabelecimentos por Categoria: Vegano, Ovolactovegetariano ou Lactovegetariano.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   [{    
 *   "nomeEstabelecimento": "Teste",
 *   "categoria": "Teste",
 *   "tipoNegocio": "Teste",
 *   "email": "Teste",
 *   "bairro": "Teste",
 *   "diaSemana": "Teste",
 *   "horario": "Teste"
 *   }]
 *
 * @apiError (404) NotFound
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Não localizamos a categoria solicitada!"
 *     }
 * 
 */

router.get("/:categoria", controller.getByCategoria)


/**
 * @api {put} /estabelecimentos/:cnpj
 * @apiName Atualização de dados do Estabelecimento
 * @apiGroup PutEstabelecimentos
 *
 * @apiParam {Number} CNPJ                                       CNPJ do estabelecimento
 *
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
 * 
 * @apiSuccess {Object[]} Mensagem de sucesso ao alterar dados.
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *   { mensagem: "Estabelecimento atualizado com sucesso!" }
 *
 * @apiError (404) NotFound
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Não localizamos o Estabelecimento para atualizar!"
 *     }
 * 
 */

router.put("/:cnpj", controller.updateEstabelecimento)

/**
 * @api {delete} /estabelecimentos/:cnpj
 * @apiName Exclusão do Estabelecimento
 * @apiGroup DeleteEstabelecimentos
 *
 * @apiParam {Number} CNPJ                                       CNPJ do estabelecimento
 *
 * @apiSuccess {Object[]} Mensagem de sucesso ao excluir um estabelecimento
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *   { message: 'Estabelecimento removido com sucesso!' }
 * 
 * @apiError (404) NotFound
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Não localizamos o Estabelecimento para exclusão!"
 *     }
 * 
 */

router.delete("/:cnpj", controller.deleteEstabelecimento)

module.exports = router