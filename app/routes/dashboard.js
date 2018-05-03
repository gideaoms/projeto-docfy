const express = require('express');
const authMiddleware = require('../middlewares/auth');
const dashboardController = require('../controllers/dashboard');

const router = express.Router();

router.use(authMiddleware);
router.get('/dashboard', dashboardController.index);

module.exports = router;
