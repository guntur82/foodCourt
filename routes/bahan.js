const bahanRoute = require('express').Router();
const { BahanController } = require('../controller');

bahanRoute.get('/', BahanController.getData);
bahanRoute.get('/create', BahanController.createPage);
bahanRoute.post('/create', BahanController.create);
bahanRoute.get('/add/:id', BahanController.addPage);
bahanRoute.post('/add/:id', BahanController.add);
bahanRoute.get('/update/:id', BahanController.updatePage);
bahanRoute.post('/update/:id', BahanController.update);
bahanRoute.get('/delete/:id', BahanController.delete);

module.exports = bahanRoute;
