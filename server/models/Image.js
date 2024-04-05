const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');
const ImageSchema = new Schema({  
    title: {
        type: String,
        trim: true,
        required: true,
        
    },
    path: {
        type:"String",
        required: true
    }

});
        //     ,
//     createdAt: {
//     type: Date,
//     default: Date.now,
//     get: (timestamp) => dateFormat(timestamp),
//   },})
const Image = model('Image', ImageSchema);

module.exports = Image; 