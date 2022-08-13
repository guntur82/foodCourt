const { pesanan, meja, makanan, bahan } = require('../models');
class PesananController {
  static async getData(req, res) {
    try {
      let result_pesanan = await pesanan.findAll({
        where: { status_makanan: 0, status_pesanan: 0 },
        include: [meja, makanan],
      });
      let result_meja = await meja.findAll();
      // res.json(result_pesanan);
      res.render('staff/pesanan/', {
        result: result_pesanan,
        meja: result_meja,
      });
    } catch (error) {
      res.json(error);
    }
  }
  static async prosesPesanan(req, res) {
    try {
      const mejaId = req.query.mejaId;
      const makananId = req.query.makananId;
      const jumlah = +req.query.jumlah;
      let list_pesanan = await pesanan.findAll({
        where: { mejaId, makananId, status_pesanan: 1, status_makanan: 0 },
      });
      if (list_pesanan.length > 0) {
        let pesanan_baru = await pesanan.findAll({
          where: { mejaId, makananId, status_pesanan: 0, status_makanan: 0 },
        });
        let jumlah_pesanan_lama = +pesanan_baru[0].jumlah;
        let result_pesanan = await pesanan.update(
          {
            jumlah: jumlah_pesanan_lama + jumlah,
          },
          {
            where: { mejaId, makananId, status_pesanan: 1, status_makanan: 0 },
          }
        );
        let delete_pesanan = await pesanan.destroy({
          where: { mejaId, makananId, status_pesanan: 0, status_makanan: 0 },
        });
      } else {
        let result_pesanan = await pesanan.update(
          {
            status_pesanan: 1,
          },
          {
            where: { mejaId, makananId, status_makanan: 0 },
          }
        );
      }
      res.redirect('/pesanan');
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = PesananController;
