const express = require("express")
const router = express.Router()
const controller = require("../controller/estabelecimentosController")

router.post("/", controller.post)
router.get("/", controller.getAll)
router.get("/:categoria", controller.getByCategoria)

module.exports = router