const Livro = require('../models/Livro')

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

module.exports ={
    cadastrarLivro,
    buscarLivros,
    atualizarLivro,
    deletarLivro
}