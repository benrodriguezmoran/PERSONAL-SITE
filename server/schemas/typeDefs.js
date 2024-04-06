const typeDefs = `
    type Blog {
        _id: ID
        title: String
        content: String
        tidbit: String
        date: String
    }
    type Image {
        _id: ID
        title: String
        path: String
    }
    type Query {
        blogs: [Blog]
        blog(blogId: ID!): Blog
        images: [Image]
    }
`;
module.exports = typeDefs;      