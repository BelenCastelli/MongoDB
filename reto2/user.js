const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        login:{
            type:String,
            required: [true, 'El nombre de usuario es obligatorio']
        }, 
        password:{
            type: String, 
            required: [true, 'La contraseña es obligatoria'],
            validate: [
                function(password) {
                    password.length >= 8
                },
                'La contraseña debe ser mayor o igual a 8'
            ],
        }
    }
);

userSchema.post('save', function(doc) {
    console.log('%s han sido guardados', doc._id);
  });

module.exports = mongoose.model('User', userSchema, 'user');

