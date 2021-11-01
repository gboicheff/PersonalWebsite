const mongoose = require("mongoose");

const Languages = new mongoose.Schema({
    title :{ type: String, required: true},
});
module.exports = mongoose.model('languages', Languages);