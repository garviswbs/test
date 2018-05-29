$(document).ready(function () {
    // external js: masonry.pkgd.js
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 50,
        gutter: 50
    });
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
$("#code").click(function () {
    $('.photo , .av , .illi , .tech , .about , .connect ').toggle();
    // $('#code').toggle(css('color', 'red'));
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 50,
        gutter: 50
    });
});

$("#photo").click(function () {
    $('.code , .av , .illi , .tech , .about , .connect ').toggle();
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 50,
        gutter: 50
    });
});

$("#av").click(function () {
    $('.code, .photo  , .illi , .tech , .about , .connect ').toggle();
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 50,
        gutter: 50
    });
});

$("#illi").click(function () {
    $('.code, .photo , .av  , .tech , .about , .connect ').toggle();
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 50,
        gutter: 50
    });
});

$("#tech").click(function () {
    $('.code, .photo , .av , .illi  , .about , .connect ').toggle();
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 50,
        gutter: 50
    });
});
$("#about").click(function () {
    $('.code, .photo , .av , .illi , .tech , .connect').toggle();
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 50,
        gutter: 50
    });
});
$("#connect").click(function () {
    $('.code, .photo , .av , .illi , .tech , .about  ').toggle();
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 50,
        gutter: 50
    });
});

// FOOTER