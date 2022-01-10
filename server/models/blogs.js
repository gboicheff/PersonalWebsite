const mongoose = require("mongoose");

const Blogs = new mongoose.Schema({
    title :{ type: String, required: true, unique: true},
    description :{ type: String, required: true},
    text :{ type: String, required: true},
    tags :{ type: [String], required: true},
    id :{ type: String, required: true, unique: true},
});
module.exports = mongoose.model('blogs', Blogs);