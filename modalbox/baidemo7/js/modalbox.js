$(function () {

    $('.noidung').addClass('noi-dung-hien-ra');
    //xử lý lớp mờ
    $('.lop_mo').addClass('show');
    //xử lý nút click
    let notification = setInterval(function () {
        $('.noidung').removeClass('noi-dung-hien-ra');
        $('.lop_mo').removeClass('show');
        clearInterval(notification);
    },3000);

    $('.nut').click(function (event) {
        $('.noidung').addClass('noi-dung-hien-ra');
        $('.lop_mo').addClass('show');
    });
    $('.nutdong,.lop_mo').click(function () {
        $('.noidung').removeClass('noi-dung-hien-ra');
        $('.lop_mo').removeClass('show');
    })
    //click vào lớp mờ thì đóng lại
});