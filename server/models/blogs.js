const mongoose = require("mongoose");

const Blogs = new mongoose.Schema({
    title :{ type: String, required: true},
    description :{ type: String, required: true},
    text :{ type: String, required: true},
    tags :{ type: [String], required: true},
});
module.exports = mongoose.model('blogs', Blogs);