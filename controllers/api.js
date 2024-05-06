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

exports.getModelClient = (req, res) => {

    const modelClient = {
        clientSchema: Client.schema.obj
    };

    res.status(200).json(modelClient);
};

exports.getModelFacture = (req, res) => {

    const modelFacture = {
        factureSchema: Facture.schema.obj,
    };

    res.status(200).json(modelFacture);
};

exports.getModelProduit = (req, res) => {

    const modelProduit = {
        produitSchema: Produit.schema.obj
    };

    res.status(200).json(modelProduit);
};