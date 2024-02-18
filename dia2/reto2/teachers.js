const mongoose = require('mongoose');

const teachersSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            lowercase: true,
            require: true
        }, 
        lastName: {
            type: String,
            lowercase: true,
            require: true
        },
        groups: {
            type:[String],
            require: true
        }
    }
)

module.exports = mongoose.model('Teachers', teachersSchema, 'Teachers')

