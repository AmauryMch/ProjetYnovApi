const Produit = require('../models/produit');

// Create
exports.createProduit = async (req, res) => {
  try {
    const produit = new Produit(req.body);
    await produit.save();
    res.status(201).json(produit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Read all
exports.getProduits = async (req, res) => {
  try {
    const produits = await Produit.find();
    res.json(produits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Read one
exports.getProduitById = async (req, res) => {
  try {
    const produit = await Produit.findById(req.params.id);
    if (!produit) {
      return res.status(404).json({ message: 'Produit not found' });
    }
    res.json(produit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update
exports.updateProduit = async (req, res) => {
  try {
    const produit = await Produit.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!produit) {
      return res.status(404).json({ message: 'Produit not found' });
    }
    res.json(produit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete
exports.deleteProduit = async (req, res) => {
  try {
    const produit = await Produit.findByIdAndDelete(req.params.id);
    if (!produit) {
      return res.status(404).json({ message: 'Produit not found' });
    }
    res.json({ message: 'Produit deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
