let mongoose = require('mongoose');

let Marks = require('./marks');
let Teachers = require ('./teachers');

// let teacher = new Teachers(
//     {
//         teacher_first_name: 'Carmen',
//         teacher_last_name: 'Martin'
//     }
// )

let teacher = {
    teacher_first_name: 'Carmen',
    teacher_last_name: 'Martin'
}

let teacher2 = {
    teacher_first_name: 'Jose',
    teacher_last_name: 'Herrera'
}

let teacher3 = {
    teacher_first_name: 'Estefania',
    teacher_last_name: 'Cuevas'
}


let mark = {
    date: new Date (2024,1,10),
    mark: 6,
    student_first_name: 'Javier',
    student_last_name: 'Alvarez',
    group: 'fulltime',
    subject_name: 'MySql',
    teachers: [teacher, teacher2]
}

let mark2 = {
    date: new Date (2024,1,10),
    mark: 7,
    student_first_name: 'Javier',
    student_last_name: 'Alvarez',
    group: 'fulltime',
    subject_name: 'MongoDB',
    teachers: [teacher, teacher2, teacher3]
}

let mark3 = {
    date: new Date (2024,1,10),
    mark: 6,
    student_first_name: 'Javier',
    student_last_name: 'Alvarez',
    group: 'fulltime',
    subject_name: 'Typescript',
    teachers: [teacher2, teacher3]
}

let mark4 = {
    date: new Date (2024,1,10),
    mark: 6,
    student_first_name: 'Laura',
    student_last_name: 'Garcia',
    group: 'parttime mañana',
    subject_name: 'MySql',
    teachers: [teacher, teacher2]
}

let mark5 = {
    date: new Date (2024,1,10),
    mark: 9,
    student_first_name: 'Laura',
    student_last_name: 'Garcia',
    group: 'parttime mañana',
    subject_name: 'MongoDB',
    teachers: [teacher, teacher2, teacher3]
}

let mark6 = {
    date: new Date (2024,1,10),
    mark: 8,
    student_first_name: 'Laura',
    student_last_name: 'Garcia',
    group: 'parttime mañana',
    subject_name: 'Typescript',
    teachers: [teacher2, teacher3]
}

let mark7 = {
    date: new Date (2024,1,10),
    mark: 5,
    student_first_name: 'Marta',
    student_last_name: 'Perez',
    group: 'parttime mañana',
    subject_name: 'MySql',
    teachers: [teacher, teacher2]
}

let mark8 = {
    date: new Date (2024,1,10),
    mark: 8,
    student_first_name: 'Marta',
    student_last_name: 'Perez',
    group: 'parttime mañana',
    subject_name: 'MongoDB',
    teachers: [teacher, teacher2, teacher3]
}

let mark9 = {
    date: new Date (2024,1,10),
    mark: 9,
    student_first_name: 'Marta',
    student_last_name: 'Perez',
    group: 'parttime mañana',
    subject_name: 'Typescript',
    teachers: [teacher2, teacher3]
}

let mark10 = {
    date: new Date (2024,1,10),
    mark: 5,
    student_first_name: 'Alejandro',
    student_last_name: 'Berros',
    group: 'fulltime',
    subject_name: 'MySql',
    teachers: [teacher, teacher2]
}

let mark11 = {
    date: new Date (2024,1,10),
    mark: 9,
    student_first_name: 'Alejandro',
    student_last_name: 'Berros',
    group: 'fulltime',
    subject_name: 'MongoDB',
    teachers: [teacher, teacher2, teacher3]
}

let mark12 = {
    date: new Date (2024,1,10),
    mark: 8,
    student_first_name: 'Alejandro',
    student_last_name: 'Berros',
    group: 'fulltime',
    subject_name: 'Typescript',
    teachers: [teacher2, teacher3]
}



mongoose.connect('mongodb+srv://belenCastelli:bs2ts7J8fjCRgUvh@codenotch.iowjrko.mongodb.net/Academy2',
                {useNewUrlParser: false, useUnifiedTopology:false})

.then(function() {
    console.log('Conexion exitosa')
    // return teacher.save()
})
// .then (data => {
//     console.log(data)
//     mongoose.disconnect();
// })
.then(function(){
    return Marks.insertMany([
        mark,mark2, mark3, mark4, mark5, mark6, mark7, mark8, mark9, mark10, mark11, mark12])
})
.then(function(data){
    console.log(`Documentos insertados correctamente: ${data}`);
    mongoose.disconnect();
})
.catch(err => console.log(err));


