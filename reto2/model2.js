let mongoose = require('mongoose');
let User = require('./user');
let Profile = require('./profile');
let Credentials = require('./credential');

mongoose.connect ('mongodb+srv://belenCastelli:@codenotch.iowjrko.mongodb.net/codenotch',
                    {useNewUrlParser: false, useUnifiedTopology:false});

let userDocument = new User (
    {
        login: 'Francisca',
        password: '123456789'
    }
);

userDocument.save()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })

let profileDocument = new Profile (
    {
        name:'Francisca',
        surname: 'Garcia',
        dateOfBirth: new Date(1990, 1, 20),
        comments: [{ body: 'lalala', date: 12/2/2024 }],
        rol:'user'
    }
);
    
profileDocument.save()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })

let credentialsDocument = new Credentials (
        {
            address: [{street: 'Suiza', number: 32}],
            phone: 648230489,
            email: 'francisca@gmail.com'
        }
    );
    
credentialsDocument.save()
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        })