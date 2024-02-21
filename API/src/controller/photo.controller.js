const PhotoModel = require('../model/photos')

function getStart(req, res){
    res.json({error:false, code: 200, message: 'Punto de inicio'})

}
function getPhoto(req, res){
    let respuesta; 

    if(req.query.user_name){
        PhotoModel.find({user_name: req.query.user_name})
        .then(function(data) {
            if(data.length == 0){
                respuesta = {error: false, codigo:200, message: 'No se encontraron fotos'}
            } else {
                console.log(data);
                let photos = data.map(photo => photo.url_photo);
                console.log(photos);
                respuesta = {error: false, codigo:200, data: photos}
            }
            res.json(respuesta)
        })
        .catch(error => {
            console.log(`Error ${error}`);
            respuesta = { error: true, codigo: 500, mensaje: 'Error en el servidor' };
            res.status(500).json(respuesta); 
        })

    } else{
        respuesta = {error: true, codigo:200, mensaje: 'Se requiere un nombre'}
        res.status(400).json(respuesta)
    }
}

function postPhoto(req, res){
    let respuesta; 
    let newPhoto = {
        user_name: req.body.user_name,
        url_photo: req.body.url_photo,
        title_photo: req.body.title_photo,
        description: req.body.description
    }
    if(newPhoto){
        PhotoModel.create(newPhoto)
        .then(function(newPhoto) {
            respuesta = {error: false, codigo:200, mensaje: 'Dato insertado correctamente', data: newPhoto}
            res.json(respuesta);
        })

        .catch(error => {
            console.log(error);
            respuesta = {error: true, codigo: 500, mensaje:'Error en la validación de los datos insertados'};
            res.json(respuesta);
        })
            
    } else {
        respuesta = {error: true, codigo:200, mensaje:'Error en el servidor'}
        res.status(400).json(respuesta)
    }
}

function putPhoto(req, res){
    let respuesta; 
    let photo = {
        title_photo: req.body.title_photo,
        description: req.body.description
    }
    PhotoModel.updateOne({title_photo: photo.title_photo},{description: photo.description})
        .then((data) =>{
            console.log('descripcion modificada');
            console.log(data);
            respuesta = {error: false, codigo:200, data: data}
            res.json(respuesta)
        })
        .catch(error => {
            console.log(`Error al modificar ${error}`);
            respuesta = {error: true, codigo: 500, mensaje:'Error en la validación de los datos modificados'};
            res.json(respuesta);
            })
        }

function deletePhoto(req, res){
    let photo = {
        user_name: req.body.user_name,
        title_photo: req.body.title_photo
    }
    PhotoModel.deleteOne({'$and':[{user_name: photo.user_name}, {title_photo: photo.title_photo}]})
    .then(function(data){
        console.log(data);
        console.log('Documento eliminado');
        respuesta = {error: false, codigo:200, data: data}
        res.json(respuesta)
    })
    .catch(error => {
        console.log(`Error al eliminar ${error}`);
        respuesta = {error: true, codigo: 500, mensaje:'Error en la validación de los datos modificados'};
        res.json(respuesta);
    })
 
}

function deleteAllPhotos(req, res){
    let user_name = req.body.user_name
    if (!user_name) {
        let respuesta = { error: true, codigo: 400, mensaje: 'Se requiere un nombre de usuario' };
        return res.status(400).json(respuesta);
    }
  
    PhotoModel.deleteMany({user_name: user_name})
    .then(function(data){
        console.log(data);
        console.log('documentos eliminados');
        if(data.deletedCount > 0){
            respuesta = {error: false, codigo:200,mensaje: 'Se eliminaron todas las fotos del usuario correctamente', data: data}
        } else {
            respuesta = {error: true, codigo: 500, mensaje:'No se encontraron fotos para ese usuario'};
        }
        
        res.json(respuesta)
 
    })
    .catch(error => {
        console.log(`Error al modificar ${error}`);
        respuesta = {error: true, codigo: 500, mensaje:'Error en eliminación de los datos modificados'};
        res.json(respuesta);
    })
}

module.exports = {getStart,getPhoto, postPhoto, putPhoto, deletePhoto, deleteAllPhotos}