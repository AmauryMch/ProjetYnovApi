const Facture = require('../models/facture');
const logger = require('../logger');

// Create
exports.createFacture = async (req, res) => {
  try {
    const facture = new Facture({
      client: req.body.client,
      dateEmission: req.body.dateEmission,
      estPayee: req.body.estPayee,
      datePaiement: req.body.datePaiement,
      prix: req.body.prix,
      produits: req.body.produits,
      creationDate: new Date(),
      modificationDate: new Date(),
      creationUser: 'admin',
      modificationUser: 'admin',
      active: true,
    });
    const savedFacture = await facture.save();
    logger.info({ message: "Création d'une facture bien réalisée", facture: savedFacture });
    res.status(201).json(savedFacture);
  } catch (error) {
    logger.error({ message: "Erreur à la création d'une facture", error: error.message });
    res.status(400).json({ message: "Erreur à la création d'une facture", error: error.message });
  }
};

// Read all
exports.getFactures = async (req, res) => {
  try {
    const factures = await Facture.find();
    logger.info({ message: "Récupération de toutes les factures", factures: factures });
    res.json(factures);
  } catch (error) {
    logger.error({ message: "Erreur lors de la récupération des factures", error: error.message });
    res.status(500).json({ message: "Erreur lors de la récupération des factures", error: error.message });
  }
};

// Read one
exports.getFactureById = async (req, res) => {
  try {
    const facture = await Facture.findById(req.params.id);
    if (!facture) {
      logger.error({ message: 'Facture non trouvée' });
      return res.status(404).json({ message: 'Facture non trouvée' });
    }
    logger.info({ message: "Récupération d'une facture par ID", facture: facture });
    res.json(facture);
  } catch (error) {
    logger.error({ message: "Erreur lors de la récupération de la facture", error: error.message });
    res.status(500).json({ message: "Erreur lors de la récupération de la facture", error: error.message });
  }
};

// Update
exports.updateFacture = async (req, res) => {
  try {
    const facture = await Facture.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!facture) {
      logger.error({ message: 'Facture non trouvée' });
      return res.status(404).json({ message: 'Facture non trouvée' });
    }
    logger.info({ message: "Mise à jour d'une facture", facture: facture });
    res.json(facture);
  } catch (error) {
    logger.error({ message: "Erreur lors de la mise à jour de la facture", error: error.message });
    res.status(400).json({ message: "Erreur lors de la mise à jour de la facture", error: error.message });
  }
};

// Delete
exports.deleteFacture = async (req, res) => {
  try {
    const facture = await Facture.findByIdAndDelete(req.params.id);
    if (!facture) {
      logger.error({ message: 'Facture non trouvée' });
      return res.status(404).json({ message: 'Facture non trouvée' });
    }
    logger.info({ message: "Suppression d'une facture", factureId: facture._id });
    res.json({ message: 'Facture supprimée avec succès' });
  } catch (error) {
    logger.error({ message: "Erreur lors de la suppression de la facture", error: error.message });
    res.status(500).json({ message: "Erreur lors de la suppression de la facture", error: error.message });
  }
};
