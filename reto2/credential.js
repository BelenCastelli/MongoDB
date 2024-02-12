const mongoose = require('mongoose');

const credentialsSchema = new mongoose.Schema(
    {
        address: [{street: String, number: Number}],
        phone: Number,
        email: String
    }
);

module.exports =  mongoose.model('Credentials', credentialsSchema, 'app');