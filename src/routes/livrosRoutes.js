const express = require("express")
const router = express.Router()
const livrosControllers = require("../controllers/livrosControllers")
const { signup, login } = require('../controllers/livrosControllers')
const authenticateToken = require('../middlewares/authMiddleware')

router.post('/signup', signup)
router.post('/login', login)

router.get('/livros', authenticateToken, livrosControllers.buscarLivros)

router.post("/livros", authenticateToken, livrosControllers.cadastrarLivro)

router.put("/livros/:id", authenticateToken, livrosControllers.atualizarLivro)

router.delete("/livros/:id", authenticateToken, livrosControllers.deletarLivro)

module.exports = router