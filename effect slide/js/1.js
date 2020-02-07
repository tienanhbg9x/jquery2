$(function () {

    thoigian = setInterval(function () {
        $('.next').trigger('click')
    },3000);
    //nut next
    $(".next").click(function (event) {
        clearInterval(thoigian); //huy chay tu dong
        let sau = $('.active').next();
        //xu ly cho phan nut
        let vitri = $('.xanh').index()+1;

        $(".button ul li").removeClass('xanh');
        if( vitri === $('.button ul li').length){
            vitri = 0;
        }
        $(".button ul li:nth-child("+ (vitri+1) +")").addClass('xanh');

        //xu ly cho phan slide
        //console.log(sau.length)
        if (sau.length == 0) //đến slide cuối cùng rồi
        {
            $(".active").addClass('di-sang-trai').one('webkitAnimationEnd', function () {
                $(".di-sang-trai").removeClass('di-sang-trai');
            });
            $('.slide .slide-1:first-child').addClass('phai-di-vao').one('webkitAnimationEnd',function () {
                //remove class active hiện tại
                $('.active').removeClass('active');
                //them class active vào thằng tiếp theo
                $('.phai-di-vao').addClass('active').removeClass('phai-di-vao');
            });
        } else {
            $(".active").addClass('di-sang-trai').one('webkitAnimationEnd', function () {
                $(".di-sang-trai").removeClass('di-sang-trai');
            });
            sau.addClass('phai-di-vao').one('webkitAnimationEnd', function () {
                //remove class active hiện tại
                $('.active').removeClass('active');
                //them class active vào thằng tiếp theo
                $('.phai-di-vao').addClass('active').removeClass('phai-di-vao');
            });
        }
    });
    //nut prev
    $(".prev").click(function (event) {
        clearInterval(thoigian);
        let truoc = $('.active').prev();
        let vitri = $('.xanh').index()+1;

        $(".button ul li").removeClass('xanh');
        if( vitri === 1){
            vitri = $('.button ul li').length + 1;
        }
        $(".button ul li:nth-child("+ (vitri-1) +")").addClass('xanh');
        //console.log(sau.length)
        if (truoc.length == 1) //đến slide cuối cùng rồi
        {
            $(".active").addClass('di-sang-phai').one('webkitAnimationEnd', function () {
                $(".di-sang-phai").removeClass('di-sang-phai');
            });

            truoc.addClass('trai-di-vao').one('webkitAnimationEnd', function () {
                //remove class active hiện tại
                $('.active').removeClass('active');
                //them class active vào thằng tiếp theo
                $('.trai-di-vao').addClass('active').removeClass('trai-di-vao');
            });
        }
        else {
            $(".active").addClass('di-sang-phai').one('webkitAnimationEnd', function () {
                $(".di-sang-phai").removeClass('di-sang-phai');
            });

            $('.slide .slide-1:last-child').addClass('trai-di-vao').one('webkitAnimationEnd', function () {
                //remove class active hiện tại
                $('.active').removeClass('active');
                //them class active vào thằng tiếp theo
                $('.trai-di-vao').addClass('active').removeClass('trai-di-vao');
            });
        }
    });
    //code cho nút chuyển slide
    $(".button ul li").click(function () {
        $(".button ul li").removeClass('xanh');
        // this = nút hiện tại được click
        $(this).addClass('xanh');


    //code xu ly cho slide

    //code cho slide hien tai bien mat
        $(".active").addClass('di-sang-phai').one('webkitAnimationEnd', function () {
            $(".di-sang-phai").removeClass('di-sang-phai');
        });
        // console.log( $(this).index() + 1 );

        $('.slide .slide-1:nth-child('+ ($(this).index() + 1) +')').addClass('trai-di-vao').one('webkitAnimationEnd', function () {
            //remove class active hiện tại
            $('.active').removeClass('active');
            //them class active vào thằng tiếp theo
            $('.trai-di-vao').addClass('active').removeClass('trai-di-vao');
        });
    });
});