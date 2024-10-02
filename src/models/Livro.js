const mongoose = require("mongoose")

const livroSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    autor: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: false
    },
    ano: {
        type: Number,
        required: false
    }
})

const Livro = mongoose.model("Livro", livroSchema)

module.exports = Livro
