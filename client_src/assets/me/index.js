var CUR_PAGE = 1;

$(function () {
    HandlebarsIntl.registerWith(Handlebars);
    
    loadPro();
    // loadCateg();
    // 2 Dòng dưới, là vì ở user.js, sau khi login lên thì sẽ lưu thông tin người dùng ở localStorage
    // Qua bên này sẽ load lại thông tin
    // // Retrieve the object from storage
    var UserInfo = JSON.parse(localStorage.getItem('UserInfo'));
    if(UserInfo){
        $("#username").text(UserInfo.user_name);
        $(".not_login").hide();
        $(".login_ok").show();
    }
    else{
        $(".login_ok").css("display", "none");
        $(".not_login").show();
    }
});
// Logout
$("#log_out").on("click", function(){
    localStorage.removeItem('UserInfo');
    $(".not_login").show();
    $(".login_ok").hide();
    location.reload();
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
        console.log(data);
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
        }, console.log($('#product-list-time').children()));
    });
    $.ajax({
        url: 'http://localhost:3000/products?page=' + CUR_PAGE,
        dataType: 'json',
        data:{type:'categ'},
        timeout:10000
    }).done(function(data){
        var source4 = $('#product-categ').html();
        var template4 = Handlebars.compile(source4);
        console.log(data);
        var html4 = template4(data.categs);
        $('#product-list-categ').append(html4);
        $('#product-list-categ div[style]').fadeIn(200, function () {
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
        proid_key: id,
    };
    $.ajax({
        url: 'http://localhost:3000/bid/' + id,
        dataType: 'json',
        timeout: 10000,
        type: 'POST',
        data: JSON.stringify(body)
    }).done(function (data, errorThrown) {
        if (errorThrown) {
            var PRO_INFO = data;
            //Put the object into storage
            localStorage.setItem('ProInfo', JSON.stringify(PRO_INFO));
        } else {
                alert("Failed " + errorThrown);
            }
    });
});


function getval(sel)
{
    alert(sel.value);
}
$('#btnSearch').on('click', function(){
    $('.loadersearch').show();
    $( "#category" ).val();
    categ = $( "#category option:selected" ).text();
    var keyword = $('#key').val();
    var body = {
        search_keyword: keyword,
        search_categ: categ
    };
    $.ajax({
        url: 'http://localhost:3000/search?page=' + CUR_PAGE,
        dataType: 'json',
        timeout: 10000,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(body)
    }).done(function(data, errorThrown) {
        if (errorThrown) {
            var SEARCH_INFO = data;
            console.log(SEARCH_INFO);
            //Put the object into storage
            localStorage.setItem('SearchInfo', JSON.stringify(SEARCH_INFO));
            window.location.href = "./search.html";
        } else {
            swal("Không tìm thấy sản phẩm ", "error");
            }
    });

    CUR_PAGE++;
        if (data.hasMore === false) {
            $('#btnMore').hide();
        }

        $('.loadersearch').hide();
});