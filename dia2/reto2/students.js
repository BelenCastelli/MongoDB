const mongoose = require('mongoose');
let Marks = require('./marks.js')

const studentsSchema = new mongoose.Schema(
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
        marks: [Marks.schema] 
    }
)

module.exports = mongoose.model('Students', studentsSchema, 'Students');