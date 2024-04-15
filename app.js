const express = require('express');
const mongoose = require('mongoose');
const compression = require('compression');
const bodyParser = require('body-parser');
const ENV = require('./environment/environment');

const app = express();
app.use(compression());

// Passby CORS errors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, UserID');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


const DB = ENV.DB;

mongoose.connect(DB).then(() => {
    console.log('Connected to MongoDB with Success !');
}).catch((err) => {
    console.log('MongoDB ERROR', err);
});

app.use(bodyParser.json());

// ROUTES
const apiRoutes = require('./routes/api');
const clientRoutes = require('./routes/client')

app.use('/api/', apiRoutes);
app.use('/client/', clientRoutes);

module.exports = app;