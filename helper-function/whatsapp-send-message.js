var accountSid = process.env.TWILO_ACCOUNT_SID;
var authToken = process.env.authToken;

const client = require('twilio')(accountSid, authToken, {
    lazyLoading: true
});

const sendmessage = async (message,senderID) => {
    try{
        console.log(accountSid,authToken)
        console.log('send message function')
        await client.messages.create({
            to: senderID,
            body: message,
            from: `whatsapp:+14155238886`
        })
    }catch(error){
        console.log(`Error at sendmessage --> ${error}`);
    }
}

const sendImages = async (senderID) => {
    try{
        await client.messages.create({
            from: `whatsapp:+14155238886`,
            to: senderID,
            body: 'Hello from images ',
            mediaUrl : ['https://file-examples.com/storage/feb1825f1e635ae95f6f16d/2017/10/file_example_JPG_100kB.jpg']
            
        })
    }catch(error){
        console.log(`Error at sendmessage --> ${error}`);
    }
}

const sendVideoMessage = async (senderID) => {
    try{
        await client.messages.create({
            from: `whatsapp:+14155238886`,
            to: senderID,
            body: 'Hello from Videos ',
            mediaUrl : 'https://file-examples.com/storage/feb1825f1e635ae95f6f16d/2017/04/file_example_MP4_480_1_5MG.mp4',
        })
    }catch(error){
        console.log(`Error at sendmessage --> ${error}`);
    }
}

const sendDocMessage = async (senderID) => {
    try{
        await client.messages.create({
            from: `whatsapp:+14155238886`,
            to: senderID,
            body: 'Hello from Videos ',
            mediaUrl : 'https://www.africau.edu/images/default/sample.pdf',
        })
    }catch(error){
        console.log(`Error at sendmessage --> ${error}`);
    }
}


module.exports = {sendmessage ,sendImages ,sendVideoMessage, sendDocMessage}