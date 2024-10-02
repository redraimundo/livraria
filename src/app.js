const express = require("express")
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const userRoutes = require('./routes/usersRoutes')
const livrosRoute = require('./routes/livrosRoutes')

dotenv.config()
connectDB()

const app = express()
app.use(express.json())

app.use('/api', userRoutes)
app.use('/api', livrosRoute)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
