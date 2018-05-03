const express = require('express');
const sectionController = require('../controllers/section');

const router = express.Router();

router.get('/projects/:projectId/sections/:id/show', sectionController.show);
router.get('/projects/:projectId/sections/:id/edit', sectionController.edit);
router.post('/projects/:projectId/sections', sectionController.store);
router.put('/projects/:projectId/sections/:id', sectionController.update);
router.delete('/projects/:projectId/sections/:id', sectionController.destroy);

module.exports = router;
