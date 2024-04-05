const {Blog, Image} = require('../models');

const resolvers = {
    Query: {
        blogs: async (parent) => {
            return Blog.find();
          },
        blog: async (parent, { blogId }) => {
            return Blog.findOne({ _id: blogId });
          },
        images: async (parent) => {
            return Image.find();
          }
        
    }
}

module.exports = resolvers;
