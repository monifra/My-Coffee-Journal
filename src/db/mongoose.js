const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/my-coffee-journal',{
    useNewUrlParser: true,
    useCreateIndex: true
});

// const validator = require('validator');
//
// const User = mongoose.model('User',{
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('Email is invalid')
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 7,
//         validate(value){
//             if(value.toLowerCase().includes('password')){
//                 throw new Error('Password cannot include word \'password\'');
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value){
//             if(value < 0){
//                 throw new Error('Age must be a positive number');
//             }
//         }
//     }
// });
//
//
// const me = new User({
//     name: 'Ala',
//     email: 'ala@pl.pl',
//     password: 'myWorld1045',
//     age: 26
// })
//
// me.save().then(()=>{
//     console.log(me);
// }).catch((error)=>{
//     console.log('Error!', error);
// });


//To RUN /Users/monikafrankowska/mongodb/bin/mongod --dbpath=/Users/monikafrankowska/mongodb-data