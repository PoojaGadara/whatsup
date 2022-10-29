const express = require('express');
const  bodyParser = require('body-parser');
require('dotenv').config();
const wa = require('../helper-function/whatsapp-send-message')

const webApp = express();

webApp.use(bodyParser.urlencoded({
    extended: true
}));

webApp.use(bodyParser.json())

const PORT = process.env.PORT;


webApp.get('/',(req , res) => {
    res.send('Hello World..!')
});

webApp.post('/whatsapp',async (req,res) => {

    console.log(req.body)
    let message = req.body;
    let senderId = req.body.From;

    console.log(message)
    console.log(senderId)
    console.log(`sender id : ${senderId}`)
    wa.sendmessage('hello',senderId)
    wa.sendImages(senderId)
   wa.sendDocMessage(senderId)
   wa.sendVideoMessage(senderId)
});

webApp.listen(PORT,() => {
    console.log(`server is running at ${PORT}`)
});