var express = require('express');
var router = express.Router();
const adminCtrl = require('../controllers/admin');

router.get('/admin', adminCtrl.index);

module.exports = router;
