const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  adresseMail: { type: String, required: true },
  dateCreation: { type: Date, default: Date.now }
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
