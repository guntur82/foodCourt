const pesananRoute = require('express').Router();
const { PesananController } = require('../controller');

pesananRoute.get('/', PesananController.getData);
pesananRoute.get('/create', PesananController.createPage);
pesananRoute.post('/create', PesananController.create);
pesananRoute.get('/update/:id', PesananController.updatePage);
pesananRoute.post('/update/:id', PesananController.update);
pesananRoute.get('/delete/:id', PesananController.delete);

module.exports = pesananRoute;
