let mongoose = require('mongoose');
let User = require('./schema');

mongoose.connect ('mongodb+srv://belenCastelli:bs2ts7J8fjCRgUvh@codenotch.iowjrko.mongodb.net/codenotch',
                    {useNewUrlParser: false, useUnifiedTopology:false});

let userDocument = new User (
    {
        name: 'Francisca',
        email: 'francisca@gmail.com',
        role: 'admin',
        verified: true
    }
);

userDocument.save()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })