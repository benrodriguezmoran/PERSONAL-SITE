const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');
const blogSchema = new Schema({  
    title: {
        type: String,
        trim: true,
        required: true
    }});
        //     ,
//     createdAt: {
//     type: Date,
//     default: Date.now,
//     get: (timestamp) => dateFormat(timestamp),
//   },})
const Blog = model('Blog', blogSchema);

module.exports = Blog;