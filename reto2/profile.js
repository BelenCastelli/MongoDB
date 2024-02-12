const mongoose = require('mongoose');



const profileSchema = new mongoose.Schema(
    {
        name:String,
        surname: String,
        dateOfBirth: Date,
        comments: [{ body: String, date: Date }],
        rol:String
    }
);

module.exports = mongoose.model('Profile', profileSchema, 'app'); 
