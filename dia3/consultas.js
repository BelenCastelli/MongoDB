let mongoose = require('mongoose');

let Marks = require('./marks');
let Teachers = require ('./teachers');

mongoose.connect('mongodb+srv://belenCastelli:bs2ts7J8fjCRgUvh@codenotch.iowjrko.mongodb.net/Academy2',
                {useNewUrlParser: false, useUnifiedTopology:false})

.then(function() {
    console.log('Conexion exitosa')
})
.catch(err => console.log(err));

//? Calcular la nota media de los alumnos de una asignatura concreta

// Marks.aggregate([{$match:{subject_name: 'node.js'}},
//                 {$group: {'_id': null, 'Nota media':{$avg: '$mark'}}}, 
//                 ])
//     .then(result => {
//         console.log(result);
//         mongoose.disconnect();
//     })
//     .catch(error => console.log(error))

// ?Calcular el número total de alumnos que hay en el bootcamp incluyendo repetidos

// Marks.aggregate([{$count: 'Número total de alumnos'}])
//     .then(result => {
//         console.log(result);
//         mongoose.disconnect();
//     })
//     .catch(error => console.log(error))


// Marks.aggregate([{$group: {'_id': '$student_first_name', 'Total Alumnos': {$sum: 1 }}}])
//     .then(result => {
//         console.log(result);
//         mongoose.disconnect();
//     })
//     .catch(error => console.log(error))


// Marks.aggregate([{$group: {'_id': null, 'Total Alumnos': {$sum: 1 }}}])
//     .then(result => {
//         console.log(result);
//         mongoose.disconnect();
//     })
//     .catch(error => console.log(error))


// ?Listar el nombre y los apellidos de todos los alumnos incluyendo repetidos

// Marks.aggregate([{$project: {'Nombre' : '$student_first_name',
//                              'Apellido' : '$student_last_name', 
//                              _id: 0}}])
//     .then(result => {
//         console.log(result);
//         mongoose.disconnect();
//     })
//     .catch(error => console.log(error))

// ?Listar el nombre y los apellidos de todos los profesores incluyendo repetidos

// Teachers.aggregate([{$project: {'Nombre' : '$teacher_first_name',
//                                 'Apellido' : '$teacher_last_name', 
//                                 _id: 0}}])
// .then(result => {
//     console.log(result);
//     mongoose.disconnect();
//     })
// .catch(error => console.log(error))

// ?Mostrar el número total de alumnos por grupo ordenados por grupo en orden inverso al alfabeto

// Marks.aggregate([   
//     {$group: {_id: {grupo: '$group', Nombre: '$student_first_name'}}},
//             {$group: {'_id': '$_id.grupo', 'Total Alumnos por grupo': {$sum: 1 }}},
//             {$sort: {'_id': -1}}
//             ])
//     .then(result => {
//         console.log(result);
//         mongoose.disconnect();
//     })
//     .catch(error => console.log(error))

// ?Obtén el top 5 de los nombres de las asignaturas cuya nota media sea mayor que 5

// Marks.aggregate([   
//             {$group: {_id:{'Asignatura': '$subject_name'}, 'Nota': {$avg: '$mark'}}},
//             {$match: {'Nota': {'$gt':5 }}},
//             {$sort: {'Nota': -1}},
//             {$limit: 5},
//             {$project: {_id: 1}},
//             ])
//     .then(result => {
//         console.log(result);
//         mongoose.disconnect();
//     })
//     .catch(error => console.log(error))

// ?Calcular el número de profesores que hay por cada asignatura incluyendo repetidos

Marks.aggregate([
        {$unwind: '$teachers'},
        {$group: {_id: {'Asignatura': '$subject_name'}, 'Total profesores': {$sum: 1}}}
    ])

    .then(result => {
        console.log(result);
        mongoose.disconnect();
    })
    .catch(error => console.log(error))