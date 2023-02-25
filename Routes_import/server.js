const express = require('express')
const home = require('./Routes/Home');
const home1 = require('./Routes/Contact');

const app = express()


const Hoeroute = require('./Routes/Home')
const jayy = require('./Routes/Contact')


app.use('/', Hoeroute)
app.use('/jay', jayy)

app.listen(3000, () => { console.log("Server started at 3000") })

