let mongoose = require('mongoose')
let Photos = require('./user')

mongoose.connect('mongodb+srv://belenCastelli:bs2ts7J8fjCRgUvh@codenotch.iowjrko.mongodb.net/Photos',
                {useNewUrlParser: false, useUnifiedTopology:false});

let photoDocument = new Photos(
    {
        user_name: 'Juan',
        url_photo: 'https://www.elplural.com/uploads/s1/11/69/82/5/cascada-ezaro-galicia.jpeg',
        title_photo: 'Viaje Galicia',
        description: 'paisaje de viaje a Galicia verano 2023'
    }
)

// photoDocument.save()
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

let data = {
    user_name: 'Juan',
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



Photos.create(data)
    .then(function(){
        console.log('Documento guardado correctamente');
        mongoose.disconnect()
    })

    .catch(function(){
        console.log('Error al escribir documento');
    })

Photos.insertMany([data, data2])
    .then(function(){
        console.log('Documentos guardados correctamente');
        mongoose.disconnect();
    })
    .catch(error => console.log(error))

