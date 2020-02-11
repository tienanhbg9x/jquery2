$(function () {

    //khi chưa làm gì thì phải tính luôn vị trí menu ban đầu và cố định luôn giá trị đó:
    // let location_menu = $(".menu").offset().top;
    $(window).scroll(function () {
        let location = $(window).scrollTop();
        if (location >= 400) {
            $(".menu").addClass('change');
        } else {
            $(".menu").removeClass('change');
        }

        // Trường hợp menu ở vị trí bất kì:
        // if(location >= location_menu){
        //  $(".menu").addClass('change');
        //  } else {
        //    $('.menu').removeClass('change')
        //  }

    //nút trở về đầu trang
        if(location >= 1500) {
             $(".on-top").addClass('show')
        } else {
            $(".on-top").removeClass('show');
        }
    });

    $('.on-top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
    });
});