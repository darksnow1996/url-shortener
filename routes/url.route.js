const express = require('express');
const router = express.Router();
const generateToken = require('../helpers/generate-token');
const urlController = require('../controllers/url.controller');

/* GET users listing. */
router.post('/create', urlController.createUrl);
router.get('/:urltoken',urlController.getUrl);

module.exports = router;
