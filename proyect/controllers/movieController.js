const Movie = require('../models/Movie');

// Obtener todas las películas del usuario autenticado
exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.find({ user: req.user.id });
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener las películas' });
  }
};

// Obtener una película por ID
exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findOne({ _id: req.params.id, user: req.user.id });
    if (!movie) return res.status(404).json({ error: 'Película no encontrada' });
    res.json(movie);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener la película' });
  }
};

// Crear una nueva película
exports.createMovie = async (req, res) => {
  try {
    const { title, director, year } = req.body;
    const newMovie = new Movie({ title, director, year, user: req.user.id });
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear la película' });
  }
};

// Actualizar una película por ID
exports.updateMovie = async (req, res) => {
  try {
    const { title, director, year } = req.body;
    const updatedMovie = await Movie.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      { title, director, year },
      { new: true }
    );
    if (!updatedMovie) return res.status(404).json({ error: 'Película no encontrada' });
    res.json(updatedMovie);
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar la película' });
  }
};

// Eliminar una película por ID
exports.deleteMovie = async (req, res) => {
  try {
    const deletedMovie = await Movie.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!deletedMovie) return res.status(404).json({ error: 'Película no encontrada' });
    res.json({ message: 'Película eliminada con éxito' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar la película' });
  }
};