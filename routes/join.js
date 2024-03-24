var express = require('express');
var router = express.Router();
const joinCtrl = require('../controllers/join')

/* GET home page. */
router.get('/join', joinCtrl.index);
 
router.post("/failure", joinCtrl.failure);

module.exports = router;
