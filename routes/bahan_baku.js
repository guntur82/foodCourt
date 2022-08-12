const bahanbakuRoute = require('express').Router();
const { BahanbakuController } = require('../controller');

bahanbakuRoute.get('/', BahanbakuController.getData);
bahanbakuRoute.get('/create', BahanbakuController.createPage);
bahanbakuRoute.post('/create', BahanbakuController.create);
bahanbakuRoute.get('/update/:id', BahanbakuController.updatePage);
bahanbakuRoute.post('/update/:id', BahanbakuController.update);
bahanbakuRoute.get('/delete/:id', BahanbakuController.delete);

module.exports = bahanbakuRoute;
