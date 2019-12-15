const express = require("express")
const router = express.Router()
const controller = require("../controller/estabelecimentosController")

/**
 * @api {get} /estabelecimentos Retorno de estabelecimentos
 * @apiName GetCadastrados
 * @apiGroup Estabelecimentos
 *
 *
 * @apiSuccess {Object[]} Retorna estabelecimentos cadastrados
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   [{    
 *   "nomeEstabelecimento": "Astronauta Café",
 *   "cnpj": 65897412358547,
 *   "categoria": "Vegano",
 *   "tipoNegocio": "Bares-Lanchonetes",
 *   "email": "astronautacafe@atendimento.com.br",
 *   "endereco": "Rua Rio Grande",
 *   "numero": 139,
 *   "bairro": "Vila Mariana",
 *   "cidade": "São Paulo",
 *   "uf": "SP",
 *   "cep": 4015050,
 *   "diasAtendimento": "Segunda a Sabado",
 *   "horariosAtendimento": "08:30 as 19:00",
 *   "telefone": 11548126440,
 *   "delivery": true
 *   }]
 *
 * @apiError (500) serverError
 *
 *  @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Internal Server Error"
 *     }
 * 
 */
 router.get("/", controller.getAll)


/**
 * @api {post} /estabelecimentos Criação de estabelecimento
 * @apiName PutEstabelecimentos
 * @apiGroup Estabelecimentos
 * 
 * @apiParam (Request Body) {String} nomeEstabelecimento         Nome do estabelecimento
 * @apiParam (Request Body) {Number} cnpj                        Cnpj
 * @apiParam (Request Body) {String} categoria                   Vegano, Ovolactovegetariano ou Lactovegetariano
 * @apiParam (Request Body) {String} tipoNegocio                 Restaurante, Bar-Lanchonete ou Pizzaria
 * @apiParam (Request Body) {String} email                       Email do estabelecimento
 * @apiParam (Request Body) {String} endereco                    Endereço do estabelecimento
 * @apiParam (Request Body) {Number} numero                      Número do estabelecimento
 * @apiParam (Request Body) {String} bairro                      Bairro do estabelecimento
 * @apiParam (Request Body) {String} cidade                      Cidade
 * @apiParam (Request Body) {String} uf                          UF
 * @apiParam (Request Body) {String} cep                         CEP do estabelecimento  
 * @apiParam (Request Body) {String} diasAtendimento             Dias de atendimento do estabelecimento
 * @apiParam (Request Body) {String} horariosAtendimento         Horario de atendimento do estabelecimento
 * @apiParam (Request Body) {String} Telefone                    Telefone de atendimento com ddd
 * @apiParam (Request Body) {Boolean} delivery                   Delivery Sim ou Nao
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
 * @api {get} /estabelecimentos/:cnpj Retorno de estabelecimentos por cnpj
 * @apiName GetByCNPJ
 * @apiGroup Estabelecimentos
 * 
 * @apiParam {Number} CNPJ
 *
 * @apiSuccess {Object[]} Retorna Informacoes dos Estabelecimentos
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   [{    
 *   "nomeEstabelecimento": "Astronauta Café",
 *   "cnpj": 65897412358547,
 *   "categoria": "Vegano",
 *   "tipoNegocio": "Bares-Lanchonetes",
 *   "email": "astronautacafe@atendimento.com.br",
 *   "endereco": "Rua Rio Grande",
 *   "numero": 139,
 *   "bairro": "Vila Mariana",
 *   "cidade": "São Paulo",
 *   "uf": "SP",
 *   "cep": 4015050,
 *   "diasAtendimento": "Segunda a Sabado",
 *   "horariosAtendimento": "08:30 as 19:00",
 *   "telefone": 11548126440,
 *   "delivery": true
 *   }]
 * 
 */

router.get("/:cnpj", controller.getByCnpj)

/**
 * @api {get} /estabelecimentos/:categoria/categoria Retorno de estabelecimentos por categoria
 * @apiName GetByCategoria
 * @apiGroup Estabelecimentos
 * 
 * @apiParam {String} Categoria Vegano, Ovolactovegetariano ou Lactovegetariano
 *
 * @apiSuccess {Object[]} Retorna Informacoes dos Estabelecimentos
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   [{    
 *   "nome": "Astronauta Café",
 *   "tipoNegocio": "Pizzaria",
 *   "bairro": "Vila Mariana",
 *   "telefone": 11548126440,
 *   "diasAtendimento": "Segunda a Sabado",
 *   "horariosAtendimento": "08:30 as 19:00"
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

router.get("/:categoria/categoria", controller.getByCategoria)

/**
 * @api {get} /estabelecimentos/:tipoNegocio/negocio Retorno de estabelecimentos por negocio
 * @apiName GetByTipoNegocio
 * @apiGroup Estabelecimentos
 * 
 * @apiParam {String} Restaurante, Pizzaria, Bares-Lanchonetes, Mercado, Loja
 *
 * @apiSuccess {Object[]} Retorna Informacoes dos Estabelecimentos
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   [{    
 *   "nome": "Astronauta Café",
 *   "categoria": "Vegano",
 *   "bairro": "Vila Mariana",
 *   "telefone": 11548126440,
 *   "diasAtendimento": "Segunda a Sabado",
 *   "horariosAtendimento": "08:30 as 19:00"
 *   }]
 *
 * @apiError (404) NotFound
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Não localizamos o tipo de negocio solicitado!"
 *     }
 * 
 */

router.get("/:tipoNegocio/negocio", controller.getByTipoNegocio)



/**
 * @api {put} /estabelecimentos/:cnpj Atualizacao de estabelecimento
 * @apiName PutEstabelecimento 
 * @apiGroup Estabelecimentos
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
 * @apiParam (Request Body) {String} bairro                      Bairro do estabelecimento
 * @apiParam (Request Body) {String} cidade                      Cidade
 * @apiParam (Request Body) {String} uf                          UF
 * @apiParam (Request Body) {String} cep                         CEP do estabelecimento  
 * @apiParam (Request Body) {String} diasAtendimento             Dias de atendimento do estabelecimento
 * @apiParam (Request Body) {String} horariosAtendimento         Horario de atendimento do estabelecimento
 * @apiParam (Request Body) {String} Telefone                    Telefone de atendimento com ddd
 * @apiParam (Request Body) {Boolean} delivery                   Delivery Sim ou Nao
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
 * @api {delete} /estabelecimentos/:cnpj Exclusao de estabelecimento
 * @apiName DeleteEstabelecimento 
 * @apiGroup Estabelecimentos
 * 
 * @apiParam {Number} CNPJ                                       CNPJ do estabelecimento
 *
 * @apiSuccess {Object[]} Retorna Mensagem de sucesso ao excluir um estabelecimento
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