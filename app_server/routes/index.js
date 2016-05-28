var express = require('express');
var router = express.Router();
var homeController = require('../controllers/home');
var postsController = require('../controllers/posts');


/* Home Pages */
router.get('/', homeController.index);
router.get('/about', homeController.about);
router.get('/contact', homeController.contact);


/* Thought pages */
router.get('/browse', postsController.index);
router.get('/read', postsController.read);
router.get('/new', postsController.new);

module.exports = router;
