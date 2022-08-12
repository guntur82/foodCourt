const { meja } = require('../models');

class MejaController {
  static async getData(req, res) {
    try {
      let result = await meja.findAll();
      res.json(result);
    } catch (error) {
      res.json(error);
    }
  }
  static async createPage(req, res) {}
  static async create(req, res) {
    try {
      const { name } = req.body;
      let result = await meja.create({
        name,
        status_meja: 0,
        status_nota: 0,
      });
      res.json(result);
    } catch (error) {
      res.json(error);
    }
  }
  static async updatePage(req, res) {}
  static async update(req, res) {
    try {
      res.json(req.body);
    } catch (error) {
      res.json(error);
    }
  }
  static async delete(req, res) {
    try {
      res.json('sample');
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = MejaController;
