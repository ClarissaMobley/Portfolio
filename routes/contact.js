import express from 'express';
import nodemailer from 'nodemailer';
import Contact from '../models/contact.js';

const router = express.Router();

router.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  const contact = new Contact({ name, email, message });

  try {
    await contact.save();

    // Debugging: Print environment variables
    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS);

    // Set up Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
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
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send Email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info);

    res.status(200).send('Message sent!');
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('Server error');
  }
});

export default router;

