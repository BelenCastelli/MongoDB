const mongoose = require('mongoose')

const photosSchema = new mongoose.Schema(
    {
        user_name:{
            type: String,
            lowercase: true,
            select: true,
            required: [true, 'el nombre es obligatorio']
        },
        url_photo: {
            type:String,
            required:true
        },
        title_photo: {
            type:String,
            required:true
        },
        description: {
            type:String,
            validate: [function(description){
                return description.length < 200
            },
            'La descripción puede contener máximo 200 caracteres']
        }
    }
)

module.exports = mongoose.model('Photos', photosSchema, 'Photos')