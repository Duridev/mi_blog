const express = require("express");
const router = express.Router();

const ArticleController = require("../controllers/Article");

// Rutas de prueba
router.get("/ruta-de-prueba", ArticleController.prueba);
router.get("/curso", ArticleController.curso);


module.exports = router;