$(function () {
    //xử lý nút click
    $('.nut').click(function () {
        //xử lý class
        $('.noidung').addClass('noi-dung-hien-ra');
        //xử lý lớp mờ
        $('.lop_mo').addClass('show');
    });
    $('.nutdong,.lop_mo').click(function () {
        $('.noidung').removeClass('noi-dung-hien-ra');
        $('.lop_mo').removeClass('show');
    })
    //click vào lớp mờ thì đóng lại
});