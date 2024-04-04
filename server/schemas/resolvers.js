const {Blog} = require('../models');

const resolvers = {
    Query: {
        blogs: async (parent) => {
            return Blog.find();
          },
        blog: async (parent, { BlogId }) => {
            return Blog.findOne({ _id: BlogId });
          },
    }
}

module.exports = resolvers;
