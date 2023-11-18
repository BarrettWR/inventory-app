var express = require('express');
const dragon = require('../models/dragon');
const { dragon_get } = require('../controllers/categoryController');
var router = express.Router();

const dragonController = require('../controllers/dragonController');
const categoryController = require('../controllers/categoryController');


/* GET home page. */
router.get('/', categoryController.index_get);

router.get('/eggs', categoryController.eggs_get);

router.get('/young', categoryController.young_get);

router.get('/adolescent', categoryController.adolescent_get);

router.get('/adults', categoryController.adults_get);


// TODO: 
// Connect to mongodb for the correct dragon by id
router.get('/dragon/:id', dragonController.dragon_get);

module.exports = router;
