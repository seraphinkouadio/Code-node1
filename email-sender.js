const nodemailer = require('nodemailer');

   const transporter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
       user: 'marrionseraphin@gmail.com',
       pass: 'your-password',
     },
   });

   const mailOptions = {
     from: 'marrioseraphin@gemail.com',
     to: 'marrioseraphinoutlook.fr.com',
     subject: 'Test Email',
     text: 'This is a test email from Node.js',
   };

   transporter.sendMail(mailOptions, (error, info) => {
     if (error) {
       console.log('Error occurred:', error.message);
     } else {
       console.log('Email sent successfully!');
       console.log('Message ID:', info.messageId);
     }
   });
   
