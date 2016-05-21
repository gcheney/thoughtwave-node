var express = require('express');
var router = express.Router();
var ctrlHome = require('../controllers/home');
var ctrlTutorials = require('../controllers/tutorials');


/* Home Pages */
router.get('/', ctrlHome.index);
router.get('/about', ctrlHome.about);
router.get('/contact', ctrlHome.contact);


/* Tutorial pages */
router.get('/tutorials', ctrlTutorials.index);
router.get('/tutorials/read', ctrlTutorials.read);

module.exports = router;
