$(document).ready(function () {
    // external js: masonry.pkgd.js
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 50,
        gutter: 50
    });
});

/////////////////////////load slow

$(document).ready(function () {
    $(function () { // $(document).ready shorthand
        $('.monster').fadeIn('slow');
    });
    /* Every time the window is scrolled ... */
    $(window).scroll(function () {

        /* Check the location of each desired element */
        $('.hideme').each(function (i) {

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {

                $(this).animate({
                    'opacity': '1'
                }, 1500);

            }

        });

    });
    // Fade out intro arrow
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.intro-arrow').fadeOut();
        } else {
            $('.intro-arrow').fadeIn();
        }
    });

    /////////////////// Hover Icon Names
    $('#i-html').hover(function () {
        $('.i-html').toggle();
    });
    $('#i-bit').hover(function () {
        $('.i-bit').toggle();
    });
    $('#i-heroku').hover(function () {
        $('.i-heroku').toggle();
    });
    $('#i-sqsp').hover(function () {
        $('.i-sqsp').toggle();
    });
    $('#i-fire').hover(function () {
        $('.i-fire').toggle();
    });
    $('#i-css').hover(function () {
        $('.i-css').toggle();
    });
    $('#i-gith').hover(function () {
        $('.i-gith').toggle();
    });
    $('#i-js').hover(function () {
        $('.i-js').toggle();
    });
    $('#i-jq').hover(function () {
        $('.i-jq').toggle();
    });
    $('#i-boot').hover(function () {
        $('.i-boot').toggle();
    });
    $('#i-matt').hover(function () {
        $('.i-matt').toggle();
    });
    $('#i-node').hover(function () {
        $('.i-node').toggle();
    });
    $('#i-react').hover(function () {
        $('.i-react').toggle();
    });
    $('#i-exp').hover(function () {
        $('.i-exp').toggle();
    });
    $('#i-ang').hover(function () {
        $('.i-ang').toggle();
    });
    $('#i-webp').hover(function () {
        $('.i-webp').toggle();
    });
    $('#i-npm').hover(function () {
        $('.i-npm').toggle();
    });
    $('#i-seq').hover(function () {
        $('.i-seq').toggle();
    });
    $('#i-mongo').hover(function () {
        $('.i-mongo').toggle();
    });
    $('#i-mlab').hover(function () {
        $('.i-mlab').toggle();
    });
    $('#i-mysql').hover(function () {
        $('.i-mysql').toggle();
    });
    $('#i-kairos').hover(function () {
        $('.i-kairos').toggle();
    });
    $('#i-face').hover(function () {
        $('.i-face').toggle();
    });
    $('#i-wpress').hover(function () {
        $('.i-wpress').toggle();
    });


});
/////////////////////// Spinning Intro Logo

$(".intro-image img").hover(function () {
        $(".intro-image img").css("transform", "rotate(360deg)");
        $(".intro-image-2 img").css("transform", "rotate(-360deg)");
        $(".intro-image img").css("padding", "44px");
        $(".intro-image-2 img").css("padding", "44px");
    },
    function () {
        $(".intro-image img").css("transform", "rotate(-0deg)");
        $(".intro-image-2 img").css("transform", "rotate(0deg)");
        $(".intro-image img").css("padding", "0");
        $(".intro-image-2 img").css("padding", "0");
    }
);

//////////////////// Scroll Menu

$(".code_scroll-btn").click(function () {
    $('html,body').animate({
            scrollTop: $(".code_scroll-anchor").offset().top
        },
        'slow');
});
$(".design_scroll-btn").click(function () {
    $('html,body').animate({
            scrollTop: $(".design_scroll-anchor").offset().top
        },
        'slow');
});
$(".media_scroll-btn").click(function () {
    $('html,body').animate({
            scrollTop: $(".media_scroll-anchor").offset().top
        },
        'slow');
});
$(".info_scroll-btn").click(function () {
    $('html,body').animate({
            scrollTop: $(".info_scroll-anchor").offset().top
        },
        'slow');
});

$(".top_scroll-btn").click(function () {
    $('html,body,footer').animate({
            scrollTop: $(".top_scroll-anchor").offset().top
        },
        'slow');
});



// var $grid = $('.grid').imagesLoaded(function () {
//     $grid.masonry({
//         itemSelector: '.grid-item',
//         percentPosition: true,
//         columnWidth: '.grid-sizer',
//         // isFitWidth: true,
//     });
// });

// Toggle elements using nav
// $("#code").click(function () {
//     $('.photo , .av , .illi , .tech , .about , .connect ').toggle();
//     // $('#code').toggle(css('color', 'red'));
//     $('.grid').masonry({
//         itemSelector: '.grid-item',
//         columnWidth: 50,
//         gutter: 50
//     });
// });

// $("#photo").click(function () {
//     $('.code , .av , .illi , .tech , .about , .connect ').toggle();
//     $('.grid').masonry({
//         itemSelector: '.grid-item',
//         columnWidth: 50,
//         gutter: 50
//     });
// });

// $("#av").click(function () {
//     $('.code, .photo  , .illi , .tech , .about , .connect ').toggle();
//     $('.grid').masonry({
//         itemSelector: '.grid-item',
//         columnWidth: 50,
//         gutter: 50
//     });
// });

// $("#illi").click(function () {
//     $('.code, .photo , .av  , .tech , .about , .connect ').toggle();
//     $('.grid').masonry({
//         itemSelector: '.grid-item',
//         columnWidth: 50,
//         gutter: 50
//     });
// });

// $("#tech").click(function () {
//     $('.code, .photo , .av , .illi  , .about , .connect ').toggle();
//     $('.grid').masonry({
//         itemSelector: '.grid-item',
//         columnWidth: 50,
//         gutter: 50
//     });
// });
// $("#about").click(function () {
//     $('.code, .photo , .av , .illi , .tech , .connect').toggle();
//     $('.grid').masonry({
//         itemSelector: '.grid-item',
//         columnWidth: 50,
//         gutter: 50
//     });
// });
// $("#connect").click(function () {
//     $('.code, .photo , .av , .illi , .tech , .about  ').toggle();
//     $('.grid').masonry({
//         itemSelector: '.grid-item',
//         columnWidth: 50,
//         gutter: 50
//     });
// });

// FOOTER