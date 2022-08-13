const pesananRoute = require('express').Router();
const { PesananController } = require('../controller');

pesananRoute.get('/', PesananController.getData);
pesananRoute.get('/proses', PesananController.prosesPesanan);

module.exports = pesananRoute;
