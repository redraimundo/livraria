const express = require("express");
const router = express.Router();
const livrosControllers = require("../controllers/livrosControllers");

router.post("/", livrosControllers.cadastrarLivro);

router.get("/", livrosControllers.buscarLivros);

router.put("/:id", livrosControllers.atualizarLivro);

router.delete("/:id", livrosControllers.deletarLivro);

module.exports = router;