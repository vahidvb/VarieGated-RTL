$(window).scroll(function () {
    if ($(window).scrollTop() > 1) {

        $('.header-nav').addClass('fixed-top');
        $('.ui-to-top').show();
    } else {
        $('.ui-to-top').hide();
        $('.col-header').slideDown(300);
        $('.header-nav').removeClass('fixed-top');
    }
});

$(document).ready(function () {
	$(".ui-to-top").hide();
    $(".ui-to-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    $('.owl-1-col').owlCarousel({
        loop: true,
        rtl: true,
        margin: 0,
        autoWidth: false,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='fa fa-chevron-right'></i>",
            "<i class='fa fa-chevron-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            }
        }
    });
    $('.owl-category').owlCarousel({
        loop: true,
        rtl: true,
        margin: 0,
        autoWidth: false,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='fa fa-chevron-right'></i>",
            "<i class='fa fa-chevron-left'></i>"
        ],
        responsive: {
            0 : {
                items: 1
            },
            768 : {
                items: 3
            },
            960 : {
                items: 3
            },
            1200 : {
                items: 4
            },
            1920 : {
                items: 4
            }
        }
    });
    $('.fa-search').click(function () {
        $('.box-search').fadeToggle(500);
    });
    $('.icon-search').click(function () {
        $('.box-search').fadeToggle(500);
    });
});
