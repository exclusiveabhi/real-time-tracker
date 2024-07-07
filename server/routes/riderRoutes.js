// server/routes/riderRoutes.js
const express = require('express');
const router = express.Router();
const riderController = require('../controllers/riderController');

router.post('/login', riderController.login);
router.post('/signup', riderController.signup);

module.exports = router;
