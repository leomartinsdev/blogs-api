const express = require('express');
const { postController } = require('../controllers');
const { validateToken } = require('../auth/validateJWT');

const router = express.Router();

router.post('/', validateToken, postController.insertPost); 
router.get('/', validateToken, postController.findAll);

module.exports = router;