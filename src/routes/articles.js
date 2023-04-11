const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articles');

// Ruta para obtener todos los artículos o filtrarlos según parámetros opcionales
router.get('/articles', articlesController.getArticlesController);

module.exports = router;


