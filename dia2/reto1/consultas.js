let mongoose = require('mongoose')
let Photos = require('./user')

mongoose.connect('mongodb+srv://belenCastelli:bs2ts7J8fjCRgUvh@codenotch.iowjrko.mongodb.net/codenotch',
                {useNewUrlParser: false, useUnifiedTopology:false});


function uploadPhoto(data) {
    Photos.create(data)
    .then(function(){
        console.log(data);
        console.log('Documento guardado correctamente');
        mongoose.disconnect()
    })

    .catch(function(){
        console.log('Error al escribir documento');
    })
}

function findPhotos(name) {
    Photos.find({user_name: name})
    .then(function(data) {
        let photos = data.map(photo => photo.url_photo)
        console.log(photos);
        mongoose.disconnect()
        return photos
    })
    .catch(error => console.log(`Error ${error}`))
}

function modifiedPhoto(title_photo, description, newDescription){
    Photos.updateOne({'$and':[{title_photo: title_photo}, {description: description}]},
                    {description: newDescription})
    .then((data) =>{
         console.log('descripcion modificada');
         console.log(data);
         mongoose.disconnect();
    })
    .catch(error => console.log(`Error al modificar ${error}`))
   
}

function modifiedManyPhoto(title_photo, description, newDescription){
    Photos.updateMany({'$and':[{title_photo: title_photo}, {description: description}]},
                    {description: newDescription})
    .then((data) =>{
         console.log('descripcion modificada');
         console.log(data);
         mongoose.disconnect();
    })
    .catch(error => console.log(`Error al modificar ${error}`))
   
}

function deletePhoto(user_name, title_photo){
    Photos.updateOne({'$and':[{user_name: user_name}, {title_photo: title_photo}]},
                    {'$unset': {url_photo: ''}})
    .then(function(data){
        console.log(data);
        console.log('URL foto eliminada');
        mongoose.disconnect();
    })
    .catch(error => console.log(`Error al modificar ${error}`))
}

function deletePhoto2(user_name, title_photo){
    Photos.deleteOne({'$and':[{user_name: user_name}, {title_photo: title_photo}]})
    .then(function(data){
        console.log(data);
        console.log('Documento eliminado');
        mongoose.disconnect();
    })
    .catch(error => console.log(`Error al modificar ${error}`))
}

function deleteAllPhoto(user_name){
    Photos.updateMany({user_name: user_name},{'$unset': {url_photo: ''}})
    .then(function(data){
        console.log(data);
        console.log('URL fotos eliminadas');
        mongoose.disconnect();
    })
    .catch(error => console.log(`Error al modificar ${error}`))
}

function deleteAllPhoto2(user_name){
    Photos.deleteMany({user_name: user_name})
    .then(function(data){
        console.log(data);
        console.log('documentos eliminados');
        mongoose.disconnect();
    })
    .catch(error => console.log(`Error al modificar ${error}`))
}


let data = {
    user_name: 'Carlos',
    url_photo: 'https://www.lavanguardia.com/files/article_main_microformat/uploads/2023/03/20/64186e42826c8.jpeg',
    title_photo: 'Viaje Galicia',
    description: 'paisaje de viaje a Galicia verano 2023'
}

let data2 = {
    user_name: 'Juan',
    url_photo: 'https://www.spain.info/export/sites/segtur/.content/imagenes/reportajes/galicia/monte-santa-tecla-la-guardia-galicia-s1695741160.jpg',
    title_photo: 'Viaje Galicia',
    description: 'paisaje de viaje a Galicia verano 2023'
}

// uploadPhoto(data)
// uploadPhoto(data2)
findPhotos(data2.user_name)
// modifiedPhoto(data.title_photo, data.description, 'Viaje a Andorra 2019')
// modifiedManyPhoto(data.title_photo, 'Viaje a Andorra 2010', 'Viaje a Andorra 2019')
// deletePhoto('Juan', 'Viaje Andorra')
// deletePhoto2('Juan', 'Viaje Andorra')
// deleteAllPhoto('carlos')
// deleteAllPhoto2('carlos')
   



