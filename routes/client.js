const express = require('express');
const router = express.Router();
const logger = require('../middlewares/logger');
const clientController = require('../controllers/client');

router.use(logger);

router.post('/', clientController.createClient);

router.get('/', clientController.getClients);

router.get('/:id', clientController.getClientById);

router.put('/:id', clientController.updateClient);

router.delete('/:id', clientController.deleteClient);

module.exports = router;
