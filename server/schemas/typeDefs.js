const typeDefs = `
    type Blog {
        _id: ID
        title: String
    }
    type Query {
        blogs: [Blog]
        blog(blogId: ID!): Blog
    }
`;
module.exports = typeDefs;