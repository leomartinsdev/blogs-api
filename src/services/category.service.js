const { Category } = require('../models');

const insertCat = async (name) => {
  const newCategory = await Category.create({ name });

  return { status: 'CREATED', data: newCategory };
};

module.exports = {
  insertCat,
};