const express = require("express")
const router = express.Router()
const controller = require("../controller/restaurantesController")

router.post("/", controller.post)
router.get("/", controller.get)

module.exports = router