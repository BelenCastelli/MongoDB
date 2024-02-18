const mongoose = require('mongoose');
let Subjects = require('./subjects.js');

const marksSchema = new mongoose.Schema(
    {
        date: {
            type: Date,
            validate: [function(date){
                return date <= new Date()
            }]
        },
        mark: {
            type: Number,
            max: 10,
            min: 0
        }, 
        subject: Subjects.schema
    }
);

module.exports = mongoose.model('Marks', marksSchema, 'Marks');
