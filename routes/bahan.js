const bahanRoute = require('express').Router();
const { BahanController } = require('../controller');

bahanRoute.get('/', BahanController.getData);
bahanRoute.get('/read', BahanController.readPage);
bahanRoute.get('/create', BahanController.createPage);
bahanRoute.post('/create', BahanController.create);
bahanRoute.post('/add', BahanController.add);
bahanRoute.get('/update/:id', BahanController.updatePage);
bahanRoute.post('/update/:id', BahanController.update);
bahanRoute.get('/delete/:id', BahanController.delete);

module.exports = bahanRoute;
