$(document).ready(function() {
    //click thay doi mau
    $('.tdkhoi').click(function(event){

        //them class thay doi mau
        $(this).toggleClass('xanh');

        //click vao noi dung hien ra
        $(this).next().slideToggle(800);

        //su dung ham animate de chuyen noi dung len
        $('body').animate({scrollTop:$(this).offset().top},900);

    });

    //phong to anh
    $('.images a').fancybox();

    $('.ndkhoi').slideUp();
    //click cho noi dung ra
});