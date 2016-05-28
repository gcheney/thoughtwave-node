var express = require('express');
var router = express.Router();
var homeController = require('../controllers/home');
var thoughtsController = require('../controllers/thoughts');


/* Home Pages */
router.get('/', homeController.index);
router.get('/about', homeController.about);
router.get('/contact', homeController.contact);


/* Thought pages */
router.get('/browse', thoughtsController.index);
router.get('/read', thoughtsController.read);
router.get('/create', thoughtsController.create);

module.exports = router;
