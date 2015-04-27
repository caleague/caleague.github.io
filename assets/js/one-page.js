jQuery(function($) {

    /*----------------------/
	/* PAGE SCROLLING
	/*---------------------*/

    // navigation scrolling
    $('#main-nav, .hero-left').localScroll({
        duration: 1000,
        easing: 'easeInOutExpo'
    });

    // scroll to top
    if ($(window).width() > 992) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 300) {
                $('.back-to-top').fadeIn();
            } else {
                $('.back-to-top').fadeOut();
            }
        });

        $('.back-to-top').click(function(e) {
            e.preventDefault();

            $('body, html').animate({
                scrollTop: 0
            }, 800, 'easeInOutExpo');
        });
    }

    $("#carousel-hero .carousel-inner").slick({
        speed: 800,
        dots: !0,
        fade: !0,
        autoplay: !0,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" data-role="none" class="carousel-control left slick-prev">Previous</button>',
        nextArrow: '<button type="button" data-role="none" class="carousel-control right slick-next">Next</button>'
    });

    $("img.lazy").lazyload({
        effect : "fadeIn"
    });
});