const mongoose = require("mongoose");

const Projects = new mongoose.Schema({
    title :{ type: String, required: true},
    description :{ type: String, required: true},
    github_link :{ type: String, required: false},
    deployment_link :{ type: String, required: false},
    tags :{ type: [String], required: true},
});
module.exports = mongoose.model('projects', Projects);