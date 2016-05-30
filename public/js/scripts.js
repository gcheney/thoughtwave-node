// Navigation script to Show Header on Scroll-Up
$(document).ready(function() {
    var MQL = 1170;

    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
        var headerHeight = $('.navbar-custom').height();
        $(window).on('scroll', {
                previousTop: 0
            }, function()   {
                var currentTop = $(window).scrollTop();
                //check if user is scrolling up
                if (currentTop < this.previousTop) {
                    //if scrolling up...
                    if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
                        $('.navbar-custom').addClass('is-visible');
                    } else {
                        $('.navbar-custom').removeClass('is-visible is-fixed');
                    }
                } else {
                    //if scrolling down...
                    $('.navbar-custom').removeClass('is-visible');
                    if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) {
                        $('.navbar-custom').addClass('is-fixed');
                    }
                }
                this.previousTop = currentTop;
            }
        );
    }
});

//script to fil in stars on hover 
$(document).ready(function() {
    $('.star').hover(function () {
            $(this).addClass('fa-star');
            $(this).removeClass('fa-star-o'); 
        }, function () {
            $(this).addClass('fa-star-o');
            $(this).removeClass('fa-star');
        });
});