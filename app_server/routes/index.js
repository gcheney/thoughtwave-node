var express = require('express');
var router = express.Router();
var homeController = require('../controllers/home');
var thoughtsController = require('../controllers/thoughts');


/* Home Pages */
router.get('/', homeController.index);
router.get('/about', homeController.about);
router.get('/contact', homeController.contact);


/* Tutorial pages */
router.get('/thoughts', thoughtsController.index);
router.get('/thoughts/read', thoughtsController.read);
router.get('/thoughts/create', thoughtsController.create);

module.exports = router;
