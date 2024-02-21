const mongoose = require('mongoose');
let Teachers = require('./teachers')

const marksSchema = new mongoose.Schema(
    {
        date: {
            type: Date,
            max: Date.now,
        },
        mark: {
            type: Number,
            max: 10,
            min: 0
        },
        student_first_name: {
            type: String,
            lowercase: true,
            required: true
        }, 
        student_last_name: {
            type: String,
            lowercase: true,
            required: true
        },
        group: {
            type: String,
            enum: ['fulltime', 'parttime mañana', 'parttime tarde'],
            lowercase: true,
            required: true
        },
        subject_name: {
            type: String,
            required: true,
            lowercase: true
        },
        teachers: [Teachers.schema]
    }
)

module.exports = mongoose.model('Marks', marksSchema, 'Marks')
