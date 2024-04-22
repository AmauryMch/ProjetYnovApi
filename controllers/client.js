const Client = require('../models/client');
const logger = require('../logger');

// Create
exports.createClient = async (req, res) => {
  try {
    const client = new Client({
      nom: req.body.nom,
      prenom: req.body.prenom,
      adresseMail: req.body.adresseMail,
      creationDate: new Date(),
      modificationDate: new Date(),
      creationUser: 'admin',
      modificationUser: 'admin',
      active: true,
    });
    await client.save();
    logger.info({ message: "Création d'un client bien réalisée", client: client });
    res.status(201).json(client);
  } catch (error) {
    logger.error({ message: "Erreur à la création d'un client", error: error.message });
    res.status(400).json({ message: "Erreur à la création d'un client", error: error.message });
  }
};

// Read all
exports.getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    logger.info({ message: "Récupération de tous les clients", clients: clients });
    res.json(clients);
  } catch (error) {
    logger.error({ message: "Erreur lors de la récupération des clients", error: error.message });
    res.status(500).json({ message: "Erreur lors de la récupération des clients", error: error.message });
  }
};

// Read one
exports.getClientById = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (!client) {
      logger.error({ message: 'Client non trouvé' });
      return res.status(404).json({ message: 'Client non trouvé' });
    }
    logger.info({ message: "Récupération d'un client par ID", client: client });
    res.json(client);
  } catch (error) {
    logger.error({ message: "Erreur lors de la récupération du client", error: error.message });
    res.status(500).json({ message: "Erreur lors de la récupération du client", error: error.message });
  }
};

// Update
exports.updateClient = async (req, res) => {
  try {
    const client = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!client) {
      logger.error({ message: 'Client non trouvé' });
      return res.status(404).json({ message: 'Client non trouvé' });
    }
    logger.info({ message: "Mise à jour d'un client", client: client });
    res.json(client);
  } catch (error) {
    logger.error({ message: "Erreur lors de la mise à jour du client", error: error.message });
    res.status(400).json({ message: "Erreur lors de la mise à jour du client", error: error.message });
  }
};

// Delete
exports.deleteClient = async (req, res) => {
  try {
    const client = await Client.findByIdAndDelete(req.params.id);
    if (!client) {
      logger.error({ message: 'Client non trouvé' });
      return res.status(404).json({ message: 'Client non trouvé' });
    }
    logger.info({ message: "Suppression d'un client", clientId: client._id });
    res.json({ message: 'Client supprimé avec succès' });
  } catch (error) {
    logger.error({ message: "Erreur lors de la suppression du client", error: error.message });
    res.status(500).json({ message: "Erreur lors de la suppression du client", error: error.message });
  }
};
