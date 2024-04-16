const mongoose = require('mongoose');

const factureSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
  dateEmission: { type: Date, default: Date.now },
  estPayee: { type: Boolean, default: false },
  datePaiement: { type: Date },
  prix: { type: Number, required: true },
  produits: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Produit' }],
  creationDate: {type:Date, required: true},
  modificationDate: {type:Date, required: true},
  creationUser: {type:String, required: true},
  modificationUser: {type:String, required: true},
  active: {type:Boolean, required: true},
});

const Facture = mongoose.model('Facture', factureSchema);

module.exports = Facture;
