const express = require("express")
const router = express.Router()
const controller = require("../controller/estabelecimentosController")

router.post("/", controller.post)
router.get("/", controller.get)

module.exports = router