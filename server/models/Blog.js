const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const blogSchema = new Schema({  
    title: {
        type: String,
        trim: true,
        required: true,
        
    },
    content: {
        type: String,
        required: true
    },
    tidbit: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    path : {
        type: String,
        required: true
    }
});

const Blog = model('Blog', blogSchema);

module.exports = Blog;