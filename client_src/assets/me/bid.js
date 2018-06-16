$(function () {
    HandlebarsIntl.registerWith(Handlebars);

    // // Load thông tin Product từ index.js
    // var ProInfo = localStorage.getItem('ProInfo');
    var ProInfo = JSON.parse(localStorage.getItem('ProInfo'));
    console.log(ProInfo);
    if(ProInfo){
        console.log('ProInfo: ', ProInfo[0].ProID);
        document.getElementById("product-id").innerHTML = ProInfo[0].ProID;
        var link = ProInfo[0].HinhAnh;
        document.getElementById("product-pic").src = ProInfo[0].HinhAnh;
        // $('#product-pic').html('<img src="data:image/png;base64,' + ProInfo[0].HinhAnh + '" />');
        document.getElementById("product-name").innerHTML = ProInfo[0].ProName;
        document.getElementById("product-num").innerHTML = ProInfo[0].SlRaGia;
        document.getElementById("product-price-now").innerHTML = ProInfo[0].GiaHienTai;
        document.getElementById("product-sell-now").innerHTML = ProInfo[0].GiaMuaNgay;
        document.getElementById("product-startday").innerHTML = ProInfo[0].NgayBD;
        document.getElementById("product-endday").innerHTML = ProInfo[0].NgayKT;
        document.getElementById("product-review").innerHTML = ProInfo[0].MoTa;
        

        document.getElementById("sell-name").innerHTML = ProInfo[0].UsName;
        document.getElementById("us-email").innerHTML = ProInfo[0].Email;
        document.getElementById("us-phone").innerHTML = ProInfo[0].Phone;
        
    }
    var UserInfo = JSON.parse(localStorage.getItem('UserInfo'));
    if(UserInfo){
        $("#dropdownMenuButton").text(UserInfo.UsName);
        $(".not_login").hide();
        $(".login_ok").show();
    }
    else{
        $(".login_ok").css("display", "none");
        $(".not_login").show();
    }
});
