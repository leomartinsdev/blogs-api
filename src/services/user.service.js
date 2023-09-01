const { User } = require('../models');

const checkUserExistence = async (email) => {
  const user = await User.findOne({ where: { email } });
  if (user) {
    return { status: 'REPEATED_EMAIL', message: 'User already registered' };
  }
};

const findAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return { status: 'SUCCESSFUL', data: users };
};

const findOne = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });

  if (!user) {
    return { status: 'NOT_FOUND', data: { message: 'User does not exist' } };
  }
  return { status: 'SUCCESSFUL', data: user };
};

const insertUser = async (displayName, email, password, image) => {
  const userExists = await checkUserExistence(email);
  if (userExists) return { status: userExists.status, data: { message: userExists.message } };

  const newUser = await User.create({ displayName, email, password, image });

  return { status: 'CREATED', data: newUser };
};

module.exports = {
  insertUser,
  findAll,
  findOne,
};