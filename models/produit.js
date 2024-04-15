const mongoose = require('mongoose');

const produitSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  stock: { type: Number, required: true },
  photo: { type: String },
  prix: { type: Number, required: true },
  factures: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Facture' }]
});

const Produit = mongoose.model('Produit', produitSchema);

module.exports = Produit;
