const route = require('express').Router();

route.get('/', (req, res) => {
  res.render('index.ejs', { layout: 'index' });
});

const bahanRoutes = require('./bahan');
const makananRoutes = require('./makanan');
const mejaRoutes = require('./meja');
const pesananRoutes = require('./pesanan');
route.use('/bahan', bahanRoutes);
route.use('/makanan', makananRoutes);
route.use('/meja', mejaRoutes);
route.use('/pesanan', pesananRoutes);

module.exports = route;
