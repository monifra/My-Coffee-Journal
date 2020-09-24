const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/my-coffee-journal',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
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


// const Coffee = mongoose.model('Coffee', {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     producer: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     roaster: {
//         type: String,
//         trim: true
//     },
//     origin: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     elevation: {
//         type: Number,
//         validate(value){
//             if(value < 0){
//                 throw new Error('Elevation must be a positive number');
//             }
//         }
//     },
//     fermentation: {
//         type: String,
//         trim: true
//     },
//     cultivar: {
//         type: String,
//         trim: true
//     },
//     cupNotes: {
//         type: String,
//         trim: true
//     },
//     qualityScore: {
//         type: Number,
//         validate(value){
//             if(value < 0){
//                 throw new Error('Quality Score must be a positive number');
//             }
//         }
//     },
//     price: {
//         type: Number,
//         validate(value){
//             if(value < 0){
//                 throw new Error('Price must be a positive number');
//             }
//         }
//     },
//     pickedDate : {
//         type: Date
//     },
//     roastDate : {
//         type: Date
//     },
//     brewDate: {
//         type: Date
//     },
//     brewMethod: {
//         type: String,
//         trim: true
//     },
//     notes:{
//         type: String,
//         trim: true
//     }
// });
//
// const coffee = new Coffee({
//     name: "test name",
//     producer: "test producer",
//     origin: "test origin"
// });
//
// coffee.save().then(()=>{
//     console.log(coffee);
// }).catch((error)=>{
//     console.log('Error!', error);
// });

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