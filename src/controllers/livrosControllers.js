const Livro = require('../models/modelo')
const User = require('../models/modelo')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

async function cadastrarLivro(req,res) {
    const { titulo, autor, genero, ano } = req.body
    try {
        const novoLivro = new Livro({ titulo, autor, genero, ano })
        const livroSalvo = await novoLivro.save()
        res.status(201).json({
            mensagem: "Livro cadastrado com sucesso!",
            livro: livroSalvo
        })
    } catch (erro) {
        res.status(500).json({
            mensagem: "Erro ao cadastrar livro",
            erro: erro.message
        })
    }
}

async function buscarLivros(req,res) {
    try{
        const livros = await Livro.find()
        res.status(200).json(livros)
    } catch (erro) {
        res.status(500).json({
            mensagem: "Erro ao buscar livros",
            erro: erro.message
        })
    }
}

async function atualizarLivro(req, res) {
    const { id } = req.params
    const { titulo, autor, genero, ano } = req.body
    try {
        const livroAtualizado = await Livro.findByIdAndUpdate(
            id,
            { titulo, autor, genero, ano },
            { new: true, runValidators: true }
        )

        if (livroAtualizado) {
            res.status(200).json({
                mensagem: "Livro atualizado com sucesso!",
                livro: livroAtualizado
            })
        } else {
            res.status(404).json({
                mensagem: "Livro não encontrado!"
            })
        }
    } catch (erro) {
        res.status(500).json({
            mensagem: "Erro ao atualizar cliente!",
            erro: erro.message
        })
    }
}

async function deletarLivro(req, res) {
    const { id } = req.params
    try {
        const livroDeletado = await Livro.findByIdAndDelete(id)

        if (livroDeletado) {
            res.status(200).json({
                mensagem: "Livro deletado com sucesso!",
                livro: livroDeletado
            })
        } else {
            res.status(404).json({
                mensagem: "Livro não encontrado!"
            })
        }
    }catch (erro) {
        res.status(500).json({
            mensagem: "Erro ao deletar livro!",
            erro: erro.message
        })
    }
}

const generateToken = (user) => {
    return jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' })
}

const signup = async (req, res) => {
    const { username, password } = req.body
    
    const existingUser = await User.findOne({ username })
    if (existingUser) {
        return res.status(400).json({ message: 'Usuário já existe.' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const user = new User({ username, password: hashedPassword })
    await user.save()
    
    res.status(201).json({ message: 'Usuário criado com sucesso!' })
}

const login = async (req, res) => {
    const { username, password } = req.body

    const user = await User.findOne({ username })
    if (!user) {
        return res.status(400).json({ message: 'Usuário ou senha inválidos.' })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        return res.status(400).json({ message: 'Usuário ou senha inválidos.' })
    }

    const token = generateToken(user)
    res.status(200).json({ token })
}

const protected = (req, res) => {
    res
    .json({ message: `Olá, ${req.user.username}! Você acessou uma rota protegida.` })
}

module.exports ={
    cadastrarLivro,
    buscarLivros,
    atualizarLivro,
    deletarLivro
},
{ signup, login, protected}