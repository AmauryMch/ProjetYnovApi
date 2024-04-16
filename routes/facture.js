const express = require('express');
const router = express.Router();
const logger = require('../middlewares/logger');
const factureController = require('../controllers/facture');

router.use(logger);

router.post('/', factureController.createFacture);

router.get('/', factureController.getFactures);

router.get('/:id', factureController.getFactureById);

router.put('/:id', factureController.updateFacture);

router.delete('/:id', factureController.deleteFacture);

module.exports = router;
