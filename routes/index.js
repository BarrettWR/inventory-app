var express = require('express');
const Dragon = require('../models/dragon');
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

router.get('/newdragon', categoryController.newdragon_get);

router.post('/newdragon', categoryController.newdragon_post)


// TODO: 
// Styling 
// "Adopting" dragons
// form validation / protection

router.get('/dragon/:id', dragonController.dragon_get);

router.post('/dragon/:id', dragonController.dragon_post);

module.exports = router;
