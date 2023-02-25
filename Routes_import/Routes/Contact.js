const express = require('express')
const kay = express.Router()

const app = express()


kay.get('/',function jay(req, res){
    res.send("Hello Jay")
})

module.exports = kay;
