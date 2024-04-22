const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api');
const logger = require('../middlewares/logger');

router.use(logger);

router.get('/response', apiController.getApiResponse);

module.exports = router;