require('dotenv').config()
const {join} = require('path')
const connectDB = require('./models').connectDB
const {Projects, Blogs, Languages, Technologies} = require("./models").models
const { loadSchemaSync } = require('@graphql-tools/load')
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader')
const { ApolloServer} = require('apollo-server-express')
const express = require('express')


const typeDefs = loadSchemaSync(join(__dirname, './schema.graphql'), {
  loaders: [
    new GraphQLFileLoader(),
  ]
});

const resolvers = {
    Query: {
      projects: async(parent, args, context, info) => {
        const projects = await Projects.find()
        return projects
      },
      blogs: async(parent, args, context, info) => {
        const blogs = await Blogs.find()
        return blogs
      },
      languages: async(parent, args, context, info) => {
        const languages = await Languages.find()
        return languages
      },
      technologies: async(parent, args, context, info) => {
        const technologies = await Technologies.find()
        return technologies
      },
    },
};

const port = process.env.PORT || 5000;

async function startApolloServer(typeDefs, resolvers){
  const server = new ApolloServer({typeDefs, resolvers})
  const app = express()
  await server.start()
  await connectDB()
  server.applyMiddleware({app, path: '/graphql'});
  

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(join(__dirname, '../client/build')));
  
    app.get('*', function(req, res) {
        res.sendFile(join(__dirname, '../client/build', 'index.html'));
    });
  }


  app.listen(port, () => {
  console.log(`Server is listening on port ${port}${server.graphqlPath}`);
})
}


startApolloServer(typeDefs, resolvers)