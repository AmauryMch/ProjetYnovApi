const Produit = require('../models/produit');
const logger = require('../logger');

// Create
exports.createProduit = async (req, res) => {
  try {
    const produit = new Produit({
      nom: req.body.nom,
      stock: req.body.stock,
      photo: req.body.photo,
      prix: req.body.prix,
      factures: req.body.factures,
      creationDate: new Date(),
      modificationDate: new Date(),
      creationUser: 'admin',
      modificationUser: 'admin',
      active: true,
    });
    await produit.save();
    console.log("Création d'un produit bien réalisée", produit);
    logger.info({ message: "Création d'un produit bien réalisée", produit: produit });
    res.status(201).json(produit);
  } catch (error) {
    console.log("Erreur à la création d'un produit", error.message);
    logger.error({ message: "Erreur à la création d'un produit", error: error.message });
    res.status(400).json({ message: "Erreur à la création d'un produit", error: error.message });
  }
};

// Read all
exports.getProduits = async (req, res) => {
  try {
    const produits = await Produit.find();
    console.log("Récupération de tous les produits", produits);
    logger.info({ message: "Récupération de tous les produits", produits: produits });
    res.json(produits);
  } catch (error) {
    console.log("Erreur lors de la récupération des produits", error.message);
    logger.error({ message: "Erreur lors de la récupération des produits", error: error.message });
    res.status(500).json({ message: "Erreur lors de la récupération des produits", error: error.message });
  }
};

// Read one
exports.getProduitById = async (req, res) => {
  try {
    const produit = await Produit.findById(req.params.id);
    if (!produit) {
      console.log('Produit non trouvé');
      logger.error({ message: 'Produit non trouvé' });
      return res.status(404).json({ message: 'Produit non trouvé' });
    }
    console.log("Récupération d'un produit par ID", produit);
    logger.info({ message: "Récupération d'un produit par ID", produit: produit });
    res.json(produit);
  } catch (error) {
    console.log("Erreur lors de la récupération du produit", error.message);
    logger.error({ message: "Erreur lors de la récupération du produit", error: error.message });
    res.status(500).json({ message: "Erreur lors de la récupération du produit", error: error.message });
  }
};

// Update
exports.updateProduit = async (req, res) => {
  try {
    const produit = await Produit.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!produit) {
      console.log('Produit non trouvé');
      logger.error({ message: 'Produit non trouvé' });
      return res.status(404).json({ message: 'Produit non trouvé' });
    }
    console.log("Mise à jour d'un produit", produit);
    logger.info({ message: "Mise à jour d'un produit", produit: produit });
    res.json(produit);
  } catch (error) {
    console.log("Erreur lors de la mise à jour du produit", error.message);
    logger.error({ message: "Erreur lors de la mise à jour du produit", error: error.message });
    res.status(400).json({ message: "Erreur lors de la mise à jour du produit", error: error.message });
  }
};

// Delete
exports.deleteProduit = async (req, res) => {
  try {
    const produit = await Produit.findByIdAndDelete(req.params.id);
    if (!produit) {
      console.log('Produit non trouvé');
      logger.error({ message: 'Produit non trouvé' });
      return res.status(404).json({ message: 'Produit non trouvé' });
    }
    console.log("Suppression d'un produit", produit._id);
    logger.info({ message: "Suppression d'un produit", produitId: produit._id });
    res.json({ message: 'Produit supprimé avec succès' });
  } catch (error) {
    console.log("Erreur lors de la suppression du produit", error.message);
    logger.error({ message: "Erreur lors de la suppression du produit", error: error.message });
    res.status(500).json({ message: "Erreur lors de la suppression du produit", error: error.message });
  }
};
