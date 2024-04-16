const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  adresseMail: { type: String, required: true },
  creationDate: {type:Date, required: true},
  modificationDate: {type:Date, required: true},
  creationUser: {type:String, required: true},
  modificationUser: {type:String, required: true},
  active: {type:Boolean, required: true},
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
