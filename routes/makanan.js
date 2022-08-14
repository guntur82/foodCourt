const makananRoute = require('express').Router();
const { MakananController } = require('../controller');

makananRoute.get('/', MakananController.getData);
makananRoute.get('/read', MakananController.readPage);
makananRoute.get('/create', MakananController.createPage);
makananRoute.post('/create', MakananController.create);
makananRoute.get('/update/:id', MakananController.updatePage);
makananRoute.post('/update/:id', MakananController.update);
makananRoute.get('/delete/:id', MakananController.delete);
makananRoute.get('/info/:id', MakananController.infoPage);
makananRoute.post('/info/:id', MakananController.info);
makananRoute.get('/masak', MakananController.masak);

module.exports = makananRoute;
