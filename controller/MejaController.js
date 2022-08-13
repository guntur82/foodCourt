const { meja, makanan, pesanan } = require('../models');

class MejaController {
  static async getData(req, res) {
    try {
      const id = req.query.id;
      let result_data = await meja.findByPk(id);
      let result_makanan = await makanan.findAll();
      let result_pesanan = await pesanan.findAll({
        where: { mejaId: +id, status_makanan: 0, status_pesanan: 0 },
        include: [meja, makanan],
      });
      res.render('home.ejs', {
        result: result_data,
        makanan: result_makanan,
        pesanan: result_pesanan,
        layout: 'home',
      });
    } catch (error) {
      res.json(error);
    }
  }
  static async home(req, res) {
    const { name } = req.body;
    let result = await meja.create({
      name,
      status_meja: 0,
      status_nota: 0,
    });
    res.redirect('/meja?id=' + result.id);
  }
  static async add(req, res) {
    try {
      const id = req.query.id;
      const makananId = req.query.makananId;
      let result = await pesanan.findAll({
        where: {
          mejaId: id,
          makananId: makananId,
          status_makanan: 0,
          status_pesanan: 0,
        },
      });
      if (result.length > 0) {
        let result_pesanan = await pesanan.update(
          {
            jumlah: result[0].jumlah + 1,
          },
          {
            where: { mejaId: id, makananId: makananId },
          }
        );
      } else {
        let result_pesanan = await pesanan.create({
          mejaId: +id,
          makananId: +makananId,
          jumlah: 1,
          status_makanan: 0,
          status_pesanan: 0,
        });
      }
      res.redirect('/meja?id=' + id);
    } catch (error) {
      res.json(error);
    }
  }
  static async delete(req, res) {
    try {
      const id = req.query.mejaId;
      const makananId = req.query.makananId;
      let result_hapus = await pesanan.destroy({
        where: {
          mejaId: id,
          makananId,
        },
      });
      res.redirect('/meja?id=' + id);
    } catch (error) {
      res.json(error);
    }
  }

  static async exit(req, res) {
    try {
      const id = req.query.id;
      let result_hapus = await pesanan.destroy({
        where: {
          mejaId: id,
        },
      });
      let result_meja = await meja.destroy({
        where: { id },
      });
      res.redirect('/');
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = MejaController;
