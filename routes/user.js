const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

router.post('/register', userController.newUser);

router.post('/login', userController.login);

module.exports = router;