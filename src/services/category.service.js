const { Category } = require('../models');

const findAll = async () => {
  const categories = await Category.findAll();

  return { status: 'SUCCESSFUL', data: categories };
};

const findOne = async (id) => {
  const category = await Category.findByPk(id);

  if (!category) {
    return { status: 'NOT_FOUND', data: { message: 'No category found' } };
  }

  return { status: 'SUCCESSFUL', data: category };
};

const insertCat = async (name) => {
  const newCategory = await Category.create({ name });

  return { status: 'CREATED', data: newCategory };
};

module.exports = {
  insertCat,
  findAll,
  findOne,
};