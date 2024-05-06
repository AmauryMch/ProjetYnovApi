const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api');
const logger = require('../middlewares/logger');

router.use(logger);

router.get('/modeldata', apiController.getModelData);
router.get('/modelClient', apiController.getModelClient);
router.get('/modelFacture', apiController.getModelFacture);
router.get('/modelProduit', apiController.getModelProduit);


module.exports = router;