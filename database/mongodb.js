let mongoose = require('mongoose');

let dataSchema = new mongoose.Schema({
    name: String
});

let data = mongoose.model('data', dataSchema);

module.exports = data;