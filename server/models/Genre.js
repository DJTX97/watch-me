const mongoose = require('mongoose');

const GenreSchema = new mongoose.Schema({
    name:String
});

const Genre = mongoose.model('Genre', GenreSchema, "genres");

module.exports = Genre