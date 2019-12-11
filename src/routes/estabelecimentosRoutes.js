const express = require("express")
const router = express.Router()
const controller = require("../controller/estabelecimentosController")

router.post("/", controller.post)
router.get("/", controller.getAll)
router.get("/:categoria", controller.getByCategoria)
router.put("/:cnpj", controller.updateEstabelecimento)
router.delete("/:cnpj", controller.deleteEstabelecimento)

module.exports = router