const express = require('express');
const { userController } = require('../controllers');
const { validateNewUser } = require('../middlewares/validateNewUser');
const { validateToken } = require('../auth/validateJWT');

const router = express.Router();

router.post('/', validateNewUser, userController.insertUser);

router.get('/', validateToken, userController.findAll); 
router.get('/:id', validateToken, userController.findOne); 

module.exports = router;