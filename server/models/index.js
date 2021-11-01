const Blogs = require('./blogs')
const Projects = require('./projects')
const mongoose = require('mongoose')

const connectDB = () => {
    return mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true} );
};

const models = {Blogs, Projects};

exports.connectDB = connectDB;
exports.models = models;