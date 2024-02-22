let mongoose = require('mongoose');

let Teachers = require('./teachers');
let Subjects = require('./subjects');
let Marks = require('./marks');
let Students = require ('./students');



let teacher = {
    firstName: 'Estefania',
    lastName: 'Cuevas',
    groups: ['full-time', 'part-time mañana']
}

let teacher2 = {
    firstName: 'Jose',
    lastName: 'Herrera',
    groups: ['full-time', 'part-time mañana', 'part-time tarde']
}

let subject = {
    title: 'Node.js',
    teachers: [teacher]
}

let subject2 = {
    title: 'Fundamentos de JavaScript',
    teachers: [teacher, teacher2]
}

let mark = {
    date: new Date(2023, 12, 5),
    mark: 9,
    subject: subject
}

let mark2 = {
    date: new Date(2023, 12, 5),
    mark: 7,
    subject: subject2
}

let mark3 = {
    date: new Date(2023, 12, 5),
    mark: 6,
    subject: subject
}

let mark4 = {
    date: new Date(2023, 12, 5),
    mark: 8,
    subject: subject2
}

let student = {
    firstName: 'Lucas',
    lastName: 'Martinez',
    marks: [mark, mark4]
}

let student2 = {
    firstName: 'Laura',
    lastName: 'Gonzalez',
    marks: [mark3, mark2]
}

mongoose.connect('mongodb+srv://belenCastelli:bs2ts7J8fjCRgUvh@codenotch.iowjrko.mongodb.net/Academy',
                {useNewUrlParser: false, useUnifiedTopology:false});

Students.insertMany([student, student2])
.then(function() {
    console.log('Documentos guardados correctamente');
})
.then(() => {   
    return Students.findOne({ firstName: 'pepe' });
  })
.then(data => {
    let marks = data.marks.map(mark => mark.mark)
    console.log('Notas:', marks);
    let subjects = data.marks.map(mark => mark.subject.title)
    console.log('Asignaturas:', subjects);
    let teachers = data.marks.map(mark => mark.subject.teachers)
    console.log('Profesores:', teachers);
  })



.catch(error => console.log(`Error al escribir el documento ${error}`))