const express = require('express')
const router = express.Router()

const app = express()


router.get('/',function Homee(req, res){
    res.send("Hello World")
})

module.exports = router;
