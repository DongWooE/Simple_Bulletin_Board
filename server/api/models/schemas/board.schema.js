const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        trim: false,
        required: true,
    },
    content: {
        type: String,
        trim: false,
        required : false,
    },
    createdAt: {
        type : Date,
        required : true,
        default : Date.now(),
    }
    });

module.exports = schema;