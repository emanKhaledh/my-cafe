

exports.post = (req, res) => {
 
console.log("bode",req.body);



const accountSid = 'AC0a6b46cea3fd4ebd8d0569232edec718';
const authToken = 'af8bf15a768880a835f4eeed0e6639a8';
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({from: '+17742955236', body:['name' + req.body.name1,'quantity'+ req.body.quantity ,'message',req.body.message ,'date',req.body.date ]  , to: process.env.no})
      .then(message => {
        res.send('ok');
        console.log("msg side",message.sid)})
      .done();
}
