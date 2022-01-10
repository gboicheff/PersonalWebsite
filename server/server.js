require('dotenv').config()
const { join } = require('path')
const connectDB = require('./models').connectDB
const { Projects, Blogs, Languages, Technologies } = require("./models").models
const { loadSchemaSync } = require('@graphql-tools/load')
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader')
const { ApolloServer} = require('apollo-server-express')
const express = require('express')
const expressJwt = require("express-jwt")

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
      getBlog: async(parent, {id}, context, info) => {
        const blog = await Blogs.findOne({id: id})
        return blog
      },
      getProject: async(parent, {title}, context, info) => {
        const project = await Projects.findOne({title: title})
        return project
      },
    },
    Mutation: {
      createProject: async(parent, {title, description, github_link, deployment_link, tags}, context, info) => {
        const project_info = {
          title: title,
          description: description,
          github_link: github_link,
          deployment_link: deployment_link,
          tags: tags
        }
        let project = new Projects(project_info)
        await project.save()
        return title;
      },
      updateProject: async(parent, {title, description, github_link, deployment_link, tags}, context, info) => {
        let project_info = {
          title: title,
          description: description,
          github_link: github_link,
          deployment_link: deployment_link,
          tags: tags
        }
        for (var field in project_info){
          if(project_info[field] == null){
            delete project_info[field]
          }
        }
        await Projects.findOneAndUpdate({"title": title}, project_info)
        return title;
      },
      createBlog: async(parent, {title, description, text, tags, id}, context, info) => {
        const blog_info = {
          title: title,
          description: description,
          text: text,
          tags: tags,
          id: id
        }
        let blog = new Blogs(blog_info)
        await blog.save()
        return title;
      },
      updateBlog: async(parent, {title, description, text, tags, id}, context, info) => {
        let blog_info = {
          title: title,
          description: description,
          text: text,
          tags: tags,
          id: id
        }
        for (var field in blog_info){
          if(blog_info[field] == null){
            delete blog_info[field]
          }
        }
        await Blogs.findOneAndUpdate({"title": title}, blog_info)
        return title;
      },
    }
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
  
  app.use(
    expressJwt({
      secret: "SUPER_SECRET",
      algorithms: ["HS256"],
      credentialsRequired: false
    })
  );


  app.listen(port, () => {
  console.log(`Server is listening on port ${port}${server.graphqlPath}`);
})
}


startApolloServer(typeDefs, resolvers)