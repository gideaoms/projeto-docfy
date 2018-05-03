const express = require('express');
const projectController = require('../controllers/project');

const router = express.Router();

router.get('/projects/:id', projectController.show);
router.post('/projects', projectController.store);
router.delete('/projects/:id', projectController.destroy);

module.exports = router;
