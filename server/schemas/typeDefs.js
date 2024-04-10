const typeDefs = `
    type Blog {
        _id: ID
        title: String
        content: String
        tidbit: String
        ref: String
        date: String
        path: String
    }
    type Project {
        _id: ID
        title: String
        content: String
        tidbit: String
        ref: String
        date: String
        path: String
        image: String
    }
    type Image {
        _id: ID
        title: String
        path: String
    }
    type Query {
        blogs: [Blog]
        blog(path: String!): Blog
        projects: [Project]
        project(path: String!): Project
        images: [Image]
    }
`;
module.exports = typeDefs;      