// server/models/Marker.js
const mongoose = require('mongoose');

const MarkerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  lat: {
    type: Number,
    required: true
  },
  lng: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Marker', MarkerSchema);
