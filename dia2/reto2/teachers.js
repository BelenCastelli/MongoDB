const mongoose = require('mongoose');

const teachersSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            lowercase: true,
            required: true
        }, 
        lastName: {
            type: String,
            lowercase: true,
            required: true
        },
        groups: {
            type:[String],
            required: true
        }
    }
)

module.exports = mongoose.model('Teachers', teachersSchema, 'Teachers')

