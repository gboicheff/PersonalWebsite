const Blogs = require('./blogs')
const Projects = require('./projects')
const Languages = require("./languages")
const Technologies = require("./technologies")
const mongoose = require('mongoose')

const connectDB = () => {
    return mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true} );
};

const models = {Blogs, Projects, Languages, Technologies};

exports.connectDB = connectDB;
exports.models = models;