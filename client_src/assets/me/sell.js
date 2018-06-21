$(document).ready(function () {
    var UserInfo = JSON.parse(localStorage.getItem('UserInfo'));
    if (UserInfo) {
        $("#username").text(UserInfo.user_name);
        $(".not_login").hide();
        $(".login_ok").show();
    }
    else {
        $(".login_ok").css("display", "none");
        $(".not_login").show();
    }
});


function getBase64(file) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        return reader.result;
    }
}
$("#btnSell").on('click', function () {
    var UserInfo = JSON.parse(localStorage.getItem('UserInfo'));
    if (UserInfo) {
        var price_start = $("#price_start").val();
        var decription = $("#decription").val();
        var product_name = $("#product_name").val();
        var price_buying_now = $("#price_buying_now").val();
        var time_sell = $("#time_sell").datepicker({ dateFormat: "yy-mm-dd" }).val()
        var price_step = $("#price_step").val();
        // Get IMAGES
        var files = document.getElementById('img_product').files;
        image = files[0];
        image1 = files[1];
        image2 = files[2];
        // var reader = new FileReader();
        // reader.readAsDataURL(image2);
        var body = {
            starting_price: price_start,
            description: decription,
            name: product_name,
            price_buy_now: price_buying_now,
            time: time_sell,
            step: price_step,
            seller: UserInfo.user_id,
            images: files
        }
        $.ajax({
            url: 'http://localhost:3000/products',
            dataType: 'json',
            timeout: 10000,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(body)
        }).done(function (data) {
            console.log(data)
        }).fail(function (xhr, textStatus, error) {
            console.log(error);
        })
    }
});
