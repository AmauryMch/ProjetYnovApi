const mongoose = require('mongoose');

const factureSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
  dateEmission: { type: Date, default: Date.now },
  estPayee: { type: Boolean, default: false },
  datePaiement: { type: Date },
  prix: { type: Number, required: true },
  produits: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Produit' }]
});

const Facture = mongoose.model('Facture', factureSchema);

module.exports = Facture;
