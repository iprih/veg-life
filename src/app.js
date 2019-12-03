const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const app = express()

mongoose.connect("mongodb+srv://admin:admin@cluster0-tjvtu.mongodb.net/restaurantes", {useUnifiedTopology: true, useNewUrlParser: true});
//mongoose.connect("mongodb://localhost:27017/restaurantes", {useUnifiedTopology: true, useNewUrlParser: true});

let db = mongoose.connection;
db.on("error", console.log.bind(console, "connection error:"))
db.once("open", function(){
  console.log("conexão feita com sucesso.")
})

const restaurantes = require("./routes/restaurantesRoutes")

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
  })


app.use(bodyParser.json())

app.use("/restaurantes", restaurantes)

module.exports = app

