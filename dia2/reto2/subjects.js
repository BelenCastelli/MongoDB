const mongoose = require('mongoose')
let Teachers = require('./teachers.js');

const subjectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            lowercase: true
        },

        teachers: [Teachers.schema]
    }
)

module.exports = mongoose.model('Subjects', subjectSchema, 'Subjects')

