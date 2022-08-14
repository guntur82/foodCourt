const { pesanan, meja, makanan } = require('../models');
class PesananController {
  static async getData(req, res) {
    try {
      let result_pesanan = await pesanan.findAll({
        where: { status_makanan: 0, status_pesanan: 0 },
        include: [meja, makanan],
      });
      let result_meja = PesananController.remove_duplicate(result_pesanan);
      let result_pesanan_makanan = await pesanan.findAll({
        where: { status_makanan: 1, status_pesanan: 1 },
        include: [meja, makanan],
      });
      let result_makanan = PesananController.remove_duplicate(
        result_pesanan_makanan
      );
      res.render('staff/pesanan/', {
        result: result_pesanan,
        meja: result_meja,
        result_pesanan: result_pesanan_makanan,
        pesanan: result_makanan,
      });
    } catch (error) {
      res.json(error);
    }
  }
  static remove_duplicate(request) {
    let list_meja = request.map((data) => {
      return data.meja;
    });
    // remove duplicate array of object id
    let result_meja = list_meja.reduce((data, index) => {
      if (!data.some((meja) => meja.id === index.id)) {
        data.push(index);
      }
      return data;
    }, []);
    return result_meja;
  }

  static async proses(req, res) {
    try {
      const mejaId = req.query.mejaId;
      const makananId = req.query.makananId;
      const jumlah = +req.query.jumlah;
      let list_pesanan = await pesanan.findAll({
        where: { mejaId, makananId, status_pesanan: 1, status_makanan: 0 },
      });
      if (list_pesanan.length > 0) {
        let jumlah_pesanan_lama = +list_pesanan[0].jumlah;
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

  static async prosesPesanan(req, res) {
    try {
      const mejaId = req.query.mejaId;
      const makananId = req.query.makananId;
      const jumlah = +req.query.jumlah;
      let list_pesanan = await pesanan.findAll({
        where: { mejaId, makananId, status_pesanan: 0, status_makanan: 1 },
      });
      if (list_pesanan.length > 0) {
        let jumlah_pesanan_lama = +list_pesanan[0].jumlah;
        let result_pesanan = await pesanan.update(
          {
            jumlah: jumlah_pesanan_lama + jumlah,
          },
          {
            where: { mejaId, makananId, status_pesanan: 0, status_makanan: 1 },
          }
        );
        let delete_pesanan = await pesanan.destroy({
          where: { mejaId, makananId, status_pesanan: 1, status_makanan: 1 },
        });
      } else {
        let result_pesanan = await pesanan.update(
          {
            status_pesanan: 0,
          },
          {
            where: { mejaId, makananId, status_makanan: 1 },
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
