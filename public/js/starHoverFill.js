var $ = require('jquery');

module.exports = function(selector) {
    $(selector).hover(function () {
            $(this).addClass('fa-star');
            $(this).removeClass('fa-star-o'); 
        }, function () {
            $(this).addClass('fa-star-o');
            $(this).removeClass('fa-star');
        });
};