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

const userSchema = new mongoose.Schema({
    username: { 
        type: String,
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    }
})

const User = mongoose.model('User', userSchema)

module.exports = Livro, User