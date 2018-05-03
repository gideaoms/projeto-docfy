const express = require('express');
const flashMiddleware = require('../middlewares/flash');
const notFoundMiddleware = require('../middlewares/not.found');
const errorMiddleware = require('../middlewares/error');
const authRoute = require('./auth');
const projectRoute = require('./project');
const dashboadRoute = require('./dashboard');
const sectionRoute = require('./section');

const router = express.Router();

router.use(
  flashMiddleware,
  authRoute,
  dashboadRoute,
  projectRoute,
  sectionRoute,
  notFoundMiddleware,
  errorMiddleware,
);

module.exports = router;
