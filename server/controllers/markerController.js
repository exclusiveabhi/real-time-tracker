// server/controllers/markerController.js
const Marker = require('../models/Marker');

exports.addMarker = async (req, res) => {
  const { userId, lat, lng } = req.body;
  try {
    const newMarker = new Marker({
      userId,
      lat,
      lng
    });
    const marker = await newMarker.save();
    res.json(marker);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getMarkers = async (req, res) => {
  try {
    const markers = await Marker.find({ userId: req.params.userId });
    res.json(markers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
