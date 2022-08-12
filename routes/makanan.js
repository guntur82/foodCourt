const makananRoute = require('express').Router();
const { MakananController } = require('../controller');

makananRoute.get('/', MakananController.getData);
makananRoute.get('/create', MakananController.createPage);
makananRoute.post('/create', MakananController.create);
makananRoute.get('/update/:id', MakananController.updatePage);
makananRoute.post('/update/:id', MakananController.update);
makananRoute.get('/delete/:id', MakananController.delete);

module.exports = makananRoute;
