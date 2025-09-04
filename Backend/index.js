const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan'); // ✅ Add Morgan
const recipeRoutes = require('./api/recipes');
const barSchoolRoutes = require('./api/barschool')
require('dotenv').config();  // Load .env variables

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Morgan for HTTP request logging
app.use(morgan('combined'));  // Logs detailed requests to console / Render logs

// MongoDB Connection (Atlas URI from .env)
mongoose.connect(process.env.MONGO_URI) // removed deprecated options
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('🍹 Welcome to ExclusiveBarDB API!');
});


// Routes
app.use('/recipes', recipeRoutes);
app.use('/barschool', barSchoolRoutes);


// Optional: Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
