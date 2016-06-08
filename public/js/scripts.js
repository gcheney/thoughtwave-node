var $ = require('jquery');
var navigationSlide = require('./navigationSlide');
var starHoverFill = require('./starHoverFill');

$(document).ready(function() {
    navigationSlide();
    starHoverFill('.star');
});