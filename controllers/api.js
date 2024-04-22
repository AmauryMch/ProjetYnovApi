const { Client, Facture, Produit } = require('../models/models');

exports.getModelData = (req, res) => {

    const modelData = {
        clientSchema: Client.schema.obj,
        factureSchema: Facture.schema.obj,
        produitSchema: Produit.schema.obj
    };

    res.status(200).json(modelData);
};
