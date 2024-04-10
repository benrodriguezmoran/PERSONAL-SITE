const {Blog, Image, Project} = require('../models');

const resolvers = {
    Query: {
        blogs: async (parent) => {
            return Blog.find().sort({ date: -1 });
          },
        blog: async (parent, { path }) => {
            return Blog.findOne({ path : path });
          },
        images: async (parent) => {
            return Image.find();
          },
        projects: async (parent) => {
          return Project.find().sort({ date: -1 });
        },
        project: async (parent, { path }) => {
          return Project.findOne({ path : path });
        }
        
    }
}

module.exports = resolvers;
