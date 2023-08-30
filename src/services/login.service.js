const { User } = require('../models');

const getUser = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    return { status: 'CONFLICT', data: { message: 'Invalid fields' } };
  }

  return { status: 'SUCCESSFUL', data: user };
};

module.exports = {
  getUser,
};
