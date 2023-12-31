const mapStatusHTTP = require('../utils/mapStatusHTTP');
const createToken = require('../utils/tokenCreation');
const { loginService } = require('../services');

// const secret = process.env.JWT_SECRET || 'secretPass';

const findUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { status, data } = await loginService.getUser(email, password);
    if (status === 'CONFLICT') {
      return res.status(mapStatusHTTP(status)).json(data);
    }

    const userId = data.id;

    // const jwtConfig = {
    //   expiresIn: '7d',
    //   algorithm: 'HS256',
    // };

    // const token = jwt.sign({ data: { userId } }, secret, jwtConfig);

    const token = createToken(userId);

    return res.status(mapStatusHTTP(status)).json({ token });
  } catch (e) {
    return res.status(mapStatusHTTP()).json({ message: 'Erro interno', error: e.message });
  }
};

module.exports = {
  findUser,
};
