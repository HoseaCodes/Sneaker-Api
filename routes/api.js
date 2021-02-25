
var express = require('express');
var router = express.Router();
var sneakersCtrl = require('../controllers/api/sneakers')

/* GET users listing. */
router.get('/sneakers', sneakersCtrl.index);

// POST /api/sneakers
router.post("/sneakers", sneakersCtrl.create);

// GET  /api/sneakers/:id
router.get('/sneakers.:id', sneakersCtrl.show);

// DELETE /api/sneakers/:id
router.delete('/sneakers.:id', sneakersCtrl.delete);

//PUT /api/sneakers/:id
router.put('/sneakers/:id', sneakersCtrl.update);

module.exports = router;
