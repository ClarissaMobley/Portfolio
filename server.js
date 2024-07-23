import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import contactRoutes from './routes/contact.js';

const app = express();

const corsOptions = {
  origin: 'https://www.clarissamobley.com',
  methods: 'GET, POST, OPTIONS', 
  allowedHeaders: 'Content-Type, Authorization',
  optionsSuccessStatus: 204 
};

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Handle OPTIONS requests globally
app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://www.clarissamobley.com');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.sendStatus(204);
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', contactRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
