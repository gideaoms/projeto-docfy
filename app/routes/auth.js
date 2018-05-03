const express = require('express');
const guestMiddleware = require('../middlewares/guest');
const authController = require('../controllers/auth');

const router = express.Router();

router.get('/', guestMiddleware, authController.signin);
router.get('/signup', guestMiddleware, authController.signup);
router.get('/signout', authController.signout);
router.post('/authenticate', authController.authenticate);
router.post('/register', authController.register);

module.exports = router;
