const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    id: Number,
    title: String,
    year: String,
    runtime: String,
    genres: [String],
    director: String,
    actors: String,
    plot: String,
    posterUrl: mongoose.Mixed
});

const Movie = mongoose.model('Movie', MovieSchema, "movie_list");

module.exports = Movie