const mongoose = require('mongoose');
const validator = require('validator');

const Coffee = mongoose.model('Coffee', {
   name: {
       type: String,
       required: true,
       trim: true
   },
   producer: {
       type: String,
       required: true,
       trim: true
   },
   roaster: {
       type: String,
       trim: true
   },
   origin: {
       type: String,
       required: true,
       trim: true
   },
   elevation: {
       type: Number,
       validate(value){
           if(value < 0){
               throw new Error('Elevation must be a positive number');
           }
       }
   },
   fermentation: {
       type: String,
       trim: true
   },
   cultivar: {
       type: String,
       trim: true
   },
   cupNotes: {
       type: String,
       trim: true
   },
   qualityScore: {
       type: Number,
       validate(value){
           if(value < 0){
               throw new Error('Quality Score must be a positive number');
           }
       }
   },
   price: {
       type: Number,
       validate(value){
           if(value < 0){
               throw new Error('Price must be a positive number');
           }
       }
   },
   pickedDate : {
       type: Date
   },
   roastDate : {
       type: Date
   },
   brewDate: {
       type: Date
   },
   brewMethod: {
       type: String,
       trim: true
   },
   notes:{
       type: String,
       trim: true
   }
});

module.exports = Coffee;