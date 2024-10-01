const express = require("express")
const router = express.Router()
const livrosControllers = require("../controllers/livrosControllers")
const { signup, login, protected} = require('../controllers/livrosControllers')
const authenticateToken = require('../middlewares/authMiddleware')

router.post('/signup', signup)
router.post('/login', login)
router.get('/livros', authenticateToken, protected)

router.post("/livros", livrosControllers.cadastrarLivro)

router.get("/livros", livrosControllers.buscarLivros)

router.put("/livros:id", livrosControllers.atualizarLivro)

router.delete("/livros:id", livrosControllers.deletarLivro)

module.exports = router