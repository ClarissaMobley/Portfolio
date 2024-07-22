import express from 'express';
import nodemailer from 'nodemailer';
import Contact from '../models/contact.js';

const router = express.Router();

router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;
  const contact = new Contact({ name, email, message });

  try {
    await contact.save();

    // Set up Nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email Content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Fixed the syntax error by adding backticks and fixing the variable name
    };

    // Send Email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Message sent!' });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;

