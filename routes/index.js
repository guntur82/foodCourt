const route = require('express').Router();

route.get('/', (req, res) => {
  // res.json({
  //   message: 'Ready',
  // });
  res.render('index.ejs', { layout: 'index' });
});

const bahanRoutes = require('./bahan');
const makananRoutes = require('./makanan');
const bahan_bakuRoutes = require('./bahan_baku');
const mejaRoutes = require('./meja');
const pesananRoutes = require('./pesanan');
route.use('/bahan', bahanRoutes);
route.use('/makanan', makananRoutes);
route.use('/bahan_baku', bahan_bakuRoutes);
route.use('/meja', mejaRoutes);
route.use('/pesanan', pesananRoutes);

module.exports = route;
