var $               = require('jquery'),
    navigationSlide = require('./scripts/navigationSlide'),
    starHoverFill   = require('./scripts/starHoverFill'),
    capitalize      = require('./scripts/capitalize');


$(document).ready(function() {
    navigationSlide();
    capitalize('.cap');
    starHoverFill('.star');
});