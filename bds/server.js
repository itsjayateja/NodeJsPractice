const express = require('express');
const db = require('mongoose');
db.set('strictQuery', false);

db.connect('mongodb://localhost/jayateja')
    .then(() => console.log("Connected"))
    .catch(err => console.error("not connected"))


const SchoolSchema = new db.Schema({
    name: String,
    age: Number,
    agee: Number
});

const dataentry = db.model('dataentry', SchoolSchema);
const Dataentry = new dataentry({
    name: "jayaTeja",
    age: 20,
    agee: 40
});
async function enterdata() {
    const result = await Dataentry.save();
    console.log(result);
}

enterdata()

