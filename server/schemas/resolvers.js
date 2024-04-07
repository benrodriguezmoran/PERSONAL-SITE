const {Blog, Image} = require('../models');

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
          }
        
    }
}

module.exports = resolvers;
