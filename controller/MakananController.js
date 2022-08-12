const { makanan } = require('../models');
const fs = require('fs');

class MakananController {
  static async getData(req, res) {
    try {
      let result = await makanan.findAll({
        order: [['id', 'asc']],
      });
      res.render('staff/makanan');
    } catch (err) {
      res.json(err);
    }
  }

  static async readPage(req, res) {
    try {
      let result = await makanan.findAll({
        order: [['id', 'asc']],
      });
      res.render('staff/menu_makanan', { result: result });
    } catch (error) {
      res.json(error);
    }
  }

  static async createPage(req, res) {
    try {
      res.render('staff/menu_makanan/actionindex.ejs', { result: null });
    } catch (error) {
      res.json(error);
    }
  }

  static async create(req, res) {
    try {
      const { name, harga } = req.body;
      let foto = '';
      if (req.files) {
        const file = req.files.foto;
        let date = new Date().getTime().toString();
        foto = date + ' - ' + file.name;
        if (!fs.existsSync(`${__dirname}/../public/uploads/`)) {
          fs.mkdirSync(`${__dirname}/../public/uploads/`);
        }
        file.mv(`${__dirname}/../public/uploads/${foto}`);
      }
      let result = await makanan.create({
        name,
        harga,
        foto,
      });
      res.redirect('/makanan/read');
    } catch (err) {
      res.json(err);
    }
  }

  static async updatePage(req, res) {
    try {
      const id = req.params.id;
      let result = await makanan.findByPk(id);
      res.render('staff/menu_makanan/actionindex.ejs', { result: result });
    } catch (error) {
      res.json(error);
    }
  }
  static async update(req, res) {
    try {
      const id = req.params.id;
      const { name, harga } = req.body;
      let foto = '';
      let old = await makanan.findByPk(id);
      if (req.files) {
        const file = req.files.foto;
        let date = new Date().getTime().toString();
        foto = date + ' - ' + file.name;
        if (!fs.existsSync(`${__dirname}/../public/uploads/`)) {
          fs.mkdirSync(`${__dirname}/../public/uploads/`);
        }
        if (fs.existsSync(`${__dirname}/../public/uploads/${old.foto}`)) {
          fs.unlink(`${__dirname}/../public/uploads/${old.foto}`, (err) => {
            if (err) throw err;
            console.log('file has been deleted');
          });
        }
        file.mv(`${__dirname}/../public/uploads/${foto}`);
      } else {
        foto = old.foto;
      }
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
      res.redirect('/makanan/read');
    } catch (error) {
      res.json('err = ' + error);
    }
  }
  static async delete(req, res) {
    try {
      const id = req.params.id;
      let old = await makanan.findByPk(id);
      if (!fs.existsSync(`${__dirname}/../public/uploads/`)) {
        fs.mkdirSync(`${__dirname}/../public/uploads/`);
      }
      if (fs.existsSync(`${__dirname}/../public/uploads/${old.foto}`)) {
        fs.unlink(`${__dirname}/../public/uploads/${old.foto}`, (err) => {
          if (err) throw err;
          console.log('file has been deleted');
        });
      }
      let result = await makanan.destroy({
        where: { id },
      });
      res.redirect('/makanan/read');
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = MakananController;
