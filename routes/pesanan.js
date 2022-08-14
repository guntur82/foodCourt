const pesananRoute = require('express').Router();
const { PesananController } = require('../controller');

pesananRoute.get('/', PesananController.getData);
pesananRoute.get('/proses', PesananController.proses);
pesananRoute.get('/proses_pesanan', PesananController.prosesPesanan);

module.exports = pesananRoute;
