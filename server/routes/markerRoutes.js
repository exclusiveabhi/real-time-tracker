// server/routes/markerRoutes.js
const express = require('express');
const router = express.Router();
const markerController = require('../controllers/markerController');

router.post('/add', markerController.addMarker);
router.get('/:userId', markerController.getMarkers);

module.exports = router;
