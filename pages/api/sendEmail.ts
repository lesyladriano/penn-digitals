// pages/api/sendEmail.ts

import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import 'dotenv/config'; 
import fs from 'fs';
import path from 'path';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL, 
        pass: process.env.SMTP_PASSWORD, 
      },
    });

    const imagePath = path.resolve('pages/api/tdp_logo.png');
    const imageContent = fs.readFileSync(imagePath, 'base64');

    let info = await transporter.sendMail({
      from: email,
      to: process.env.SMTP_EMAIL,
      subject: 'The Penn Digitals recieved an email from a client',
      html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>The Penn Digitals Interest Check</title>
        <style>
          body {
            background-color: #FFFFFF;
            font-family: sans-serif;
            margin: 0;
            padding: 0;
          }
      
          .container {
            background-color: #FBF3EE;
            padding: 20px;
            padding-bottom: 40px;
          }
      
          .center {
            text-align: center;
            padding-top: 10px;
            padding-bottom: 20px;
          }
      
          img {
            width: 150px;
          }
      
          .content {
            background-color: #FFFFFF;
            font-family: sans-serif;
            padding: 30px;
          }
      
          .name-email {
            font-size: 20px;
            font-weight: bold;
            color: #BC7F6C;
            padding-left: 2rem;
          }
          
          .message-container{
              font-style: italic;
              font-size: 20px;
              color: #BC7F6C;
              display: flex; 
              width: 70%;
              padding-left: 2rem;
      
          }
          p{
              display: flex-row;
          }
          .title{
              font-weight: bold;
              color:#366776;
              width: 7rem !important;
          }
          .content-holder{
              flex-direction:column;
              margin-top:1rem;
          }
          .open-statement{
              font-size: 14px;
              padding: 1rem;
              color:#366776;
          }
          @media screen and (max-width: 600px) {
            .container {
              margin: 10px;
            }
      
            .content {
              padding: 15px;
            }
      
            .name-email {
              font-size: 13px;
              padding-left: 20px;
              padding-left: .5rem;
            }
            .content-holder{
              flex-direction: column;
              margin-top: 1rem;
          }
          .message-container{
              font-style: italic;
              font-size: 15px;
              padding-left: 20px;
              padding-left: .5rem;
          }
          .open-statement{
              font-size: 10px;
              padding: .7rem;
      
          }
          
          }
      
        </style>
      </head>
      <body>
        <div class="container">
          <div class="center">  
          <img src="cid:tpd_logo" alt="The Penn Digitals Logo">
            <div class="open-statement">
              The Penn Digitals has received an email from ${name}. Here is the content of the message.
            </div>
          </div>
      
          <div class="content">
          <div class="content-holder" >
              <div class="title">Name: </div><div class="name-email">${name}</div>
            </div>
      
            <div class="content-holder">
              <div class="title">Email:</div> 
              <div class="name-email">${email}</div>
            </div>
      
            <div class="content-holder">
              <div class="title"> Message: </div>
              <div class="message-container">
                ${message}
              </div>
            </div>
          </div>
        </div>
      </body>
      </html>
      `,
      attachments: [
        {
          filename: 'tpd_logo.png',
          content: imageContent,
          encoding: 'base64',
          cid: 'tpd_logo',
        },
      ],
    });

    console.log('Message sent: %s', info.messageId);
    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
