var express = require('express');
var router = express.Router();
const indexCtrl = require('../controllers/index')

/* GET home page. */
router.get('/', indexCtrl.index);
/* POST Newsletter */
router.post("/", indexCtrl.newsletterReq);
router.post("/failure", indexCtrl.failure);

module.exports = router;
