// server/models/Rider.js
const mongoose = require('mongoose');

const RiderSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Rider', RiderSchema);
