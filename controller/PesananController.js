const { pesanan } = require('../models');
class PesananController {
  static async getData(req, res) {
    try {
      res.render('staff/pesanan/');
    } catch (error) {
      res.json(error);
    }
  }
  static async createPage(req, res) {}
  static async create(req, res) {}
  static async updatePage(req, res) {}
  static async update(req, res) {}
  static async delete(req, res) {}
}

module.exports = PesananController;
