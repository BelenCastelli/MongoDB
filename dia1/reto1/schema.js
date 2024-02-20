const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name:String, 
        email:String,
        role: String,
        verified:Boolean
    }
);

module.exports = mongoose.model('User', userSchema, 'users');