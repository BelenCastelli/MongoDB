const mongoose = require('mongoose')

const teachersSchema = new mongoose.Schema(
    {
        teacher_first_name: {
            type: String,
            lowercase: true,
            require: true
        }, 
        teacher_last_name: {
            type: String,
            lowercase: true,
            require: true
        }
    }
)

module.exports = mongoose.model('Teachers', teachersSchema, 'Teachers')
