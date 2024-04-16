const mongoose = require('mongoose');

const produitSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  stock: { type: Number, required: true },
  photo: { type: String },
  prix: { type: Number, required: true },
  factures: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Facture' }],
  creationDate: {type:Date, required: true},
  modificationDate: {type:Date, required: true},
  creationUser: {type:String, required: true},
  modificationUser: {type:String, required: true},
  active: {type:Boolean, required: true},
});

const Produit = mongoose.model('Produit', produitSchema);

module.exports = Produit;
