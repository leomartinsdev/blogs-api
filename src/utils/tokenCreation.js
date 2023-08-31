const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secretPass';

const createToken = (userId) => {
  const jwtConfig = {
    expiresIn: '30d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: { userId } }, secret, jwtConfig);
  return token;
};

module.exports = createToken;