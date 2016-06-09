var $               = require('jquery');
var navigationSlide = require('./scripts/navigationSlide');
var starHoverFill   = require('./scripts/starHoverFill');
var capitalize      = require('./scripts/capitalize');


$(document).ready(function() {
    navigationSlide();
    capitalize('cap');
    starHoverFill('.star');
});
