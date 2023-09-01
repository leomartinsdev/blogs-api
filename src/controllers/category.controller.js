const mapStatusHTTP = require('../utils/mapStatusHTTP');
const { categoryService } = require('../services');

const findAll = async (req, res) => {
  try {
    const { status, data } = await categoryService.findAll();
    res.status(mapStatusHTTP(status)).json(data);
  } catch (e) {
    console.error(e);
  }
};

const insertCat = async (req, res) => {
  try {
    const { name } = req.body;

    const { status, data } = await categoryService.insertCat(name);
    
    return res.status(mapStatusHTTP(status)).json(data);
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  insertCat,
  findAll,
};