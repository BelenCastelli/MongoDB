const mongoose = require('mongoose');



const profileSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            lowercase: true,
            select: true,
            required: [true, 'el nombre es obligatorio']
        },
        surname: {
            type: String,
            lowercase: true,
            required: [true, 'el apellido es obligatorio']
        },
        dateOfBirth: {
            type: Date,
            min: new Date(1930,0,1),
            max: new Date(2002,0,1)
        },
        comments: [
            {body: {
                type:String, 
                validate: [function(body){
                    return body.length < 50
                },
                'El comentario puede contener máximo 50 caracteres']
                },
            date:{
                type: Date,
                default: Date.now
            }
           }
        ],
        rol:{
            type: String,
            enum: ['admin', 'user'],
            required: [true, 'el rol es obligatorio']
        }
    }
);

profileSchema.post('save', function(doc) {
    console.log('%s han sido guardados', doc._id);
  });

module.exports = mongoose.model('Profile', profileSchema, 'profile'); 
