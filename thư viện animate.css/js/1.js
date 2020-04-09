$(function () {
    $(window).scroll(function () {
        let location_body = $(window).scrollTop();
        let location_giaodien = $(".giaodien").offset().top;
        location_giaodien = location_giaodien - 500;
        if( location_body >= location_giaodien ) {

            $('.giaodien').addClass('animated fadeInRight');

        }
    });
});