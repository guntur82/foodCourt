const { bahan } = require('../models');
class BahanController {
  static async getData(req, res) {
    try {
      let result = await bahan.findAll({
        order: [['id', 'asc']],
      });
      // res.json(result);
      res.render('staff/bahan');
    } catch (err) {
      res.json('err = ' + err);
    }
  }
  static async readPage(req, res) {
    try {
      let result = await bahan.findAll();
      res.render('staff/menu_bahan', { result: result });
    } catch (error) {
      res.json(error);
    }
  }
  static async createPage(req, res) {
    try {
      res.render('staff/menu_bahan/actionindex', { result: null });
    } catch (error) {
      res.json(error);
    }
  }
  static async create(req, res) {
    try {
      const { name } = req.body;
      let result = await bahan.create({
        name,
        stok: 0,
      });
      res.redirect('/bahan/read');
    } catch (err) {
      res.json('err = ' + err);
    }
  }
  static async updatePage(req, res) {
    try {
      const id = req.params.id;
      let result = await bahan.findByPk(id);
      res.render('staff/menu_bahan/actionindex', { result: result });
    } catch (error) {
      res.json(error);
    }
  }
  static async update(req, res) {
    try {
      const id = req.params.id;
      const { name } = req.body;
      let result = await bahan.update(
        {
          name,
        },
        {
          where: { id },
        }
      );
      res.redirect('/bahan/read');
    } catch (err) {
      res.json(err);
    }
  }
  static async delete(req, res) {
    try {
      const id = req.params.id;
      let result = await bahan.destroy({
        where: { id },
      });
      res.redirect('/bahan/read');
    } catch (err) {
      res.json(err);
    }
  }

  static async addPage(req, res) {}
  static async add(req, res) {
    try {
      const id = req.params.id;
      const { stok } = req.body;
      let stok_awal = await bahan.findByPk(id);
      let stok_tambah = +stok;
      let result = await bahan.update(
        {
          stok: stok_awal.stok + stok_tambah,
        },
        {
          where: { id },
        }
      );
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = BahanController;
