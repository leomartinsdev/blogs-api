const { Category } = require('../models');

const findAll = async () => {
  const categories = await Category.findAll();

  return { status: 'SUCCESSFUL', data: categories };
};

const insertCat = async (name) => {
  const newCategory = await Category.create({ name });

  return { status: 'CREATED', data: newCategory };
};

module.exports = {
  insertCat,
  findAll,
};