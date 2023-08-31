const mapStatusHTTP = require('../utils/mapStatusHTTP');
const createToken = require('../utils/tokenCreation');
const { userService } = require('../services');

const findAll = async (_req, res) => {
  try {
    const { status, data } = await userService.findAll();

    return res.status(mapStatusHTTP(status)).json(data);
  } catch (e) {
    res.status(mapStatusHTTP('NOT_FOUND')).json({ message: 'Failed to retrive users' });
  }
};

const findOne = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(' --> ID CONTROL:', id);
    const { status, data } = await userService.findOne(id);
    console.log('--> DATA CONTROL:', data);
    return res.status(mapStatusHTTP(status)).json(data);
  } catch (e) {
    res.status(mapStatusHTTP('NOT_FOUND')).json({ message: 'Failed to retrive user' });
  }
};

const insertUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
  
    const { status, data } = await userService.insertUser(displayName, email, password, image);
    if (status === 'REPEATED_EMAIL') {
      return res.status(mapStatusHTTP(status)).json(data);
    }

    const token = createToken(data.id);
    
    return res.status(mapStatusHTTP(status)).json({ token });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  insertUser,
  findAll,
  findOne,
};