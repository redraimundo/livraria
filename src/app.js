const express = require("express")
const app = express()
const livrosRoute = require('./routes/livrosRoutes')

app.use(express.json())
app.use("/livros", livrosRoute)

module.exports = app