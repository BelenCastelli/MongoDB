let mongoose = require('mongoose');
let User = require('./user');
let Profile = require('./profile');
let Credentials = require('./credential');

mongoose.connect ('mongodb+srv://belenCastelli:bs2ts7J8fjCRgUvh@codenotch.iowjrko.mongodb.net/codenotch',
                    {useNewUrlParser: false, useUnifiedTopology:false});

let userDocument = new User (
    {
        login: 'Maria',
        password: 'asdfghjk'
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
        name:'Maria',
        surname: 'Fernández',
        dateOfBirth: new Date(2000, 1, 20),
        comments: [{ body: 'lalala'}],
        rol:'admin'
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
            address: [{street: 'real', number: 2}],
            phone: 648230489,
            email: 'maria@gmail.com'
        }
    );
    
credentialsDocument.save()
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        })