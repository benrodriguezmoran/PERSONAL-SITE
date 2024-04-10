const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const projectSchema = new Schema({  
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
    },
    image: {
        type: String,
        default: "..."
    }
});

const Project = model('Project', projectSchema);

module.exports = Project;