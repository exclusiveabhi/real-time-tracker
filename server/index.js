// server/index.js

const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes'); // Assuming user routes are defined in a separate file

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Connect to MongoDB
const mongoURI = 'mongodb+srv://exclusiveabhi:PASSWORD@cluster1.baefyre.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/user', userRoutes); // Mount user routes

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
