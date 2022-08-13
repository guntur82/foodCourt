const mejaRoute = require('express').Router();
const { MejaController } = require('../controller');

mejaRoute.get('/', MejaController.getData);
mejaRoute.post('/home', MejaController.home);
mejaRoute.get('/add', MejaController.add);
mejaRoute.get('/delete', MejaController.delete);

module.exports = mejaRoute;
