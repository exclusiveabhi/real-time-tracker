// server/routes/user.js

const express = require('express');
const router = express.Router();
// const userRoutes = require('./routes/user');

const User = require('../models/User'); // Assuming you have a User model

// Route to handle user signup
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with that email' });
    }

    // Create a new user
    const newUser = new User({ email, password });
    await newUser.save();

    // Optionally, you can send back some data if needed
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error signing up user:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
