const Facture = require('../models/facture');

// Create
exports.createFacture = async (req, res) => {
  try {
    const facture = new Facture(req.body);
    await facture.save();
    res.status(201).json(facture);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Read all
exports.getFactures = async (req, res) => {
  try {
    const factures = await Facture.find();
    res.json(factures);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Read one
exports.getFactureById = async (req, res) => {
  try {
    const facture = await Facture.findById(req.params.id);
    if (!facture) {
      return res.status(404).json({ message: 'Facture not found' });
    }
    res.json(facture);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update
exports.updateFacture = async (req, res) => {
  try {
    const facture = await Facture.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!facture) {
      return res.status(404).json({ message: 'Facture not found' });
    }
    res.json(facture);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete
exports.deleteFacture = async (req, res) => {
  try {
    const facture = await Facture.findByIdAndDelete(req.params.id);
    if (!facture) {
      return res.status(404).json({ message: 'Facture not found' });
    }
    res.json({ message: 'Facture deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
