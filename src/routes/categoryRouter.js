const express = require('express');
const { validateToken } = require('../auth/validateJWT');
const { validateCatName } = require('../middlewares/validateCatName');
const { categoryController } = require('../controllers');

const router = express.Router();

router.post('/', validateToken, validateCatName, categoryController.insertCat);

module.exports = router;