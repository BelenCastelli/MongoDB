const mongoose = require('mongoose');

const credentialsSchema = new mongoose.Schema(
    {
        address: [
            {street: {
                type:String,
                validate: [
                    function(street){
                        return street.length < 120
                    },
                'La calle no puede ser mayor a 120 caracteres'
                ]
                },
                number: {
                    type: Number,
                    max: [9, 'el numero de la calle no puede ser mayor a 9']
                }
            }
        ],
        phone: {
            type:Number,
            min: [111111111, 'Mínimo 9 dígitos'],
            max: [99999999999999, `Máximo 14 dígitos`]
        },
        email: {
            type: String,
            validate: [ 
                function(email) {
                    return /\S+@\S+\.\S+/.test(email); 
                },
                'El formato no es valido'
            ]
        }
    }
);

credentialsSchema.pre('save', function(next) {
    console.log('middleware de entrata');
    this.address.forEach(address => {
        if(address.number < 1 || address.number > 9)
            console.log('El numero de la calle debe ser entre 1 y 9');
        else    
            next();
    })
  });

credentialsSchema.post('save', function(doc) {
    console.log('%s han sido guardados', doc._id);
  });
module.exports =  mongoose.model('Credentials', credentialsSchema, 'credential');