const express = require('express');
const userControllers = require('../controllers/user.controllers')
const router = express.Router();

// router Enpoints
router.post('/', userControllers.userRegister);
router.get('/:userId', userControllers.getUser);

module.exports = router