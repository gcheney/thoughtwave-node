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
router.get('/tutorials/view', ctrlTutorials.view);
router.get('/tutorials/reviews/add', ctrlTutorials.addReview);

module.exports = router;
