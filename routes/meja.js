const mejaRoute = require('express').Router();
const { MejaController } = require('../controller');

mejaRoute.get('/', MejaController.getData);
mejaRoute.post('/home', MejaController.home);
mejaRoute.get('/add', MejaController.add);
mejaRoute.get('/delete', MejaController.delete);
mejaRoute.get('/show', MejaController.show);
mejaRoute.get('/exit', MejaController.exit);

module.exports = mejaRoute;
