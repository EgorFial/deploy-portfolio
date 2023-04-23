const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
 service:'gmail',
  auth: {
      user: 'jorgeviolamedia@gmail.com',
      pass: 'csddvlryzcvritrb'
  }
 
});



  
const express = require('express');
const cors = require('cors');
const { promises } = require('nodemailer/lib/xoauth2');
var email='',text='';
const PORT = process.env.port || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.listen(PORT, () => {
  console.log(`server starting on port ${PORT}`);
});

app.post('/send', (req, res) => {
    let obj = req.body;
    email =obj.email;
    text = obj.text;
    console.log(`email: ${email}`);
    console.log(`text: ${text}`);
    const mailOptions={
      form: `Portfolio`,
      to:'zhochok4@gmail.com',
      subject: 'Кто-то оставил сообщение на сайте Portfolio',
      text: `От: ${email}. Текст:${text} `
      }
      

   transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Message sent: %s', info.messageId);
    }
  });
   res.json('Данные успешно приняты');
 });

 