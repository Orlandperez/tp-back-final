const express = require('express');
const { getMovies, getMovieById, createMovie, updateMovie, deleteMovie } = require('../controllers/movieController');
const authMiddleware = require('../middlewares/auth');
const router = express.Router();

// Rutas protegidas
router.get('/', authMiddleware, getMovies); // Obtener todas las películas
router.get('/:id', authMiddleware, getMovieById); // Obtener una película por ID
router.post('/', authMiddleware, createMovie); // Crear una nueva película
router.put('/:id', authMiddleware, updateMovie); // Actualizar una película por ID
router.delete('/:id', authMiddleware, deleteMovie); // Eliminar una película por ID

module.exports = router;