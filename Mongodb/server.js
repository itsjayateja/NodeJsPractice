const express = require('express')
const mongoose = require('mongoose')
mongoose.set('strictQuery', false);

mongoose.connect('mongodb://localhost/playground')
 .then(()=> console.log('Connected'))
 .catch(err =>console.log('not connected'))

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {type:Date, default: Date.now},
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);
const course = new Course({
    name:'macha',
    author: "odhura rey",
    tags: ["falue", "thu",],
    isPublished: true
});
async function createCourse(){
    const result = await course.save();
    console.log(result);
}

createCourse()

