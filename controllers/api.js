const Client = require('../models/client');
const Facture = require('../models/facture');
const Produit = require('../models/produit');

exports.getModelData = (req, res) => {

    const modelData = {
        clientSchema: Client.schema.obj,
        factureSchema: Facture.schema.obj,
        produitSchema: Produit.schema.obj
    };

    res.status(200).json(modelData);
};