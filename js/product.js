$(document).ready(function () {
    $('.owl-sub-image').owlCarousel({
        loop: true,
        rtl: true,
        margin: 0,
        autoWidth: false,
        nav: true,
        dots: false,
        autoplay: false,
        autoplayHoverPause: true,
        navText: [
            "<i class='fal fa-chevron-right'></i>",
            "<i class='fal fa-chevron-left'></i>"
        ],
        responsive: {
            0: {
                items: 2
            },
            480 : {
                items: 2
            },
            678 : {
                items: 2
            },
            960 : {
                items: 4
            },
            1200 : {
                items: 4
            }
        }
    });
    $('.owl-sub-image .item img').click(function () {
     $('.image-zoom').attr('src',$(this).attr('src'));
     $('.image-zoom').trigger('zoom.destroy');
        $('.image-zoom')
            .wrap('<span style="display:inline-block"></span>')
            .css('display', 'block')
            .parent()
            .zoom({
                url: $(this).find('img').attr('data-zoom')
            });
    });
});
function incrementValue(e) {
    e.preventDefault();
    var fieldName = $(e.target).data('field');
    var parent = $(e.target).closest('div');
    var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

    if (!isNaN(currentVal)) {
        parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
    } else {
        parent.find('input[name=' + fieldName + ']').val(0);
    }
}

function decrementValue(e) {
    e.preventDefault();
    var fieldName = $(e.target).data('field');
    var parent = $(e.target).closest('div');
    var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

    if (!isNaN(currentVal) && currentVal > 0) {
        parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
    } else {
        parent.find('input[name=' + fieldName + ']').val(0);
    }
}

$('.input-group').on('click', '.button-plus', function(e) {
    incrementValue(e);
});

$('.input-group').on('click', '.button-minus', function(e) {
    decrementValue(e);
});
