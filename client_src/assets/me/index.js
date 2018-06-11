var CUR_PAGE = 1;

$(function () {
    HandlebarsIntl.registerWith(Handlebars);
    loadPro();

    // 2 Dòng dưới, là vì ở user.js, sau khi login lên thì sẽ lưu thông tin người dùng ở localStorage
    // Qua bên này sẽ load lại thông tin
    // // Retrieve the object from storage
    var UserInfo = JSON.parse(localStorage.getItem('UserInfo'));
    
    if(UserInfo){
        console.log('UserInfo: ', UserInfo.UsName);
    }
});

// $(function() {
//     HandlebarsIntl.registerWith(Handlebars);
//     loadProDetail();
// });

var loadProDetail = function (id) {
    console.log(id)
    $.ajax({
        url: 'http://localhost:3000/products/' + id,
        dataType: 'json',
        timeout: 10000
    }).done(function (data) {
        var source = $('#product-detail').html();
        // var source1 = $('#product-detail1').html();
        var template = Handlebars.compile(source);
        var html = template(data.image);
        console.log(source);
        // var template1 = Handlebars.compile(source);
        // var html1 = template(data.image);
        $('#product-list-detail').append(html);
        // $('#product-list-detail-1').append(html1);
        $('#product-list-detail div[style]').fadeIn(200, function () {
            $(this).removeAttr('style');
        });

    });
};
$(function () {
    HandlebarsIntl.registerWith(Handlebars);
    load();
});


var load = function() {
    $('.loader').show();
};

//ajax load sản phẩm theo loại.
var loadPro = function () {
    $('.loader').show();
    $.ajax({
        url: 'http://localhost:3000/products?page=' + CUR_PAGE,
        dataType: 'json',
        data:{type:'num'},
        timeout: 10000
    }).done(function (data) {
        var source = $('#product-template').html();
        var template = Handlebars.compile(source);
        var html = template(data.products);
        $('#product-list-num').append(html);
        $('#product-list-num div[style]').fadeIn(200, function () {
            $(this).removeAttr('style');
        });
$.ajax({
    url: 'http://localhost:3000/products?page=' + CUR_PAGE,
    dataType: 'json',
    data:{type:'price'},
    timeout: 10000
}).done(function (data) {
    var source2 = $('#product-template').html();
    var template2 = Handlebars.compile(source2);
    var html2 = template(data.products);
    $('#product-list-price').append(html2);
    $('#product-list-price div[style]').fadeIn(200, function () {
        $(this).removeAttr('style');
    });
    $.ajax({
        url: 'http://localhost:3000/products?page=' + CUR_PAGE,
        dataType: 'json',
        data:{type:'time'},
        timeout: 10000
    }).done(function (data) {
        var source3 = $('#product-template').html();
        var template3 = Handlebars.compile(source3);
        var html3 = template(data.products);
        $('#product-list-time').append(html3);
        $('#product-list-time div[style]').fadeIn(200, function () {
            $(this).removeAttr('style');
        });
    });
});

        CUR_PAGE++;
        if (data.hasMore === false) {
            $('#btnMorePrice').hide();
        }

        $('.loader').hide();
    });
};

//Đấu giá sản phẩm.
// $('#btnBid').on('click', function(){
$(document).on('click', '#btnBid', function() {
    var id = $(this).attr("data-id")
    var body = {
        proid_key: id
    };
    $.ajax({
        url: 'http://localhost:3000/bid/' + id,
        dataType: 'json',
        timeout: 10000,
        data: JSON.stringify(body)
    }).done(function (data) {
        console.log(data);
    });
});