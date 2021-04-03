const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.post('/addset', adminController.addSet);

module.exports = router;