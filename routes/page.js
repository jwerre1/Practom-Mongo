const express = require('expresss');

const pageController = require('../controllers/page');

const router = express.Router();

router.get('/', pageController.mainPage);