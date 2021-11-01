const mongoose = require("mongoose");

const Technologies = new mongoose.Schema({
    title :{ type: String, required: true},
});
module.exports = mongoose.model('technologies', Technologies);