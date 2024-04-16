const express = require('express');
const router = express.Router();
const logger = require('../middlewares/logger');
const produitController = require('../controllers/produit');

router.use(logger);

router.post('/', produitController.createProduit);

router.get('/', produitController.getProduits);

router.get('/:id', produitController.getProduitById);

router.put('/:id', produitController.updateProduit);

router.delete('/:id', produitController.deleteProduit);

module.exports = router;
