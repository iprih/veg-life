const express = require("express")
const router = express.Router()
const controller = require("../controller/restaurantesController")

router.post("/", controller.post)

module.exports = router