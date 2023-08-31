const jwt = require('jsonwebtoken');

const { userService } = require('../services');

const secret = process.env.JWT_SECRET || 'secretPass';

function extractToken(bearerToken) {
  return bearerToken.split(' ')[1];
}

const validateToken = async (req, res, next) => {
  const bearerToken = req.header('Authorization');

  if (!bearerToken) return res.status(401).json({ message: 'Token not found' });

  const token = extractToken(bearerToken);

  try {
    const decoded = jwt.verify(token, secret);
    const { userId } = decoded.data;
    console.log('--> userID', userId);

    const user = await userService.findOne(userId);

    if (!user) {
      return res.status(401).json({ message: 'Erro ao procurar usário do token.' });
    }

    req.user = user;
    next();
  } catch (e) {
    console.log(e);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateToken,
};
