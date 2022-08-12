const { makanan } = require('../models');
class MakananController {
  static async getData(req, res) {
    try {
      let result = await makanan.findAll({
        order: [['id', 'asc']],
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }
  static async createPage(req, res) {}
  static async create(req, res) {
    try {
      const { name, harga, foto } = req.body;
      let result = await makanan.create({
        name,
        harga,
        foto,
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }
  static async updatePage(req, res) {}
  static async update(req, res) {
    try {
      const id = req.params.id;
      const { name, harga, foto } = req.body;
      let result = await makanan.update(
        {
          name,
          harga,
          foto,
        },
        {
          where: { id },
        }
      );
      res.json(result);
    } catch (error) {
      res.json(error);
    }
  }
  static async delete(req, res) {
    try {
      const id = req.params.id;
      let result = await makanan.destroy({
        where: { id },
      });
      res.json(result);
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = MakananController;
