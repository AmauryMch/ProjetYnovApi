const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api');
const logger = require('../middlewares/logger');

router.use(logger);

router.get('/modeldata', apiController.getModelData);

module.exports = router;