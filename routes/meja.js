const mejaRoute = require('express').Router();
const { MejaController } = require('../controller');

mejaRoute.get('/', MejaController.getData);
mejaRoute.get('/create', MejaController.createPage);
mejaRoute.post('/create', MejaController.create);
mejaRoute.get('/update/:id', MejaController.updatePage);
mejaRoute.post('/update/:id', MejaController.update);
mejaRoute.get('/delete/:id', MejaController.delete);

module.exports = mejaRoute;
