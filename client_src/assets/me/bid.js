$(function () {
    HandlebarsIntl.registerWith(Handlebars);

    // // Load thông tin Product từ index.js
    var ProInfo = localStorage.getItem('ProInfo');
    var UserInfo = JSON.parse(localStorage.getItem('ProInfo'));
    
    if(ProInfo){
        console.log('ProInfo: ', UserInfo[0].ProID);
        document.getElementById("product-id").innerHTML = UserInfo[0].ProID;
        var link = UserInfo[0].HinhAnh;
        document.getElementById("product-pic").src = UserInfo[0].HinhAnh;
        // $('#product-pic').html('<img src="data:image/png;base64,' + UserInfo[0].HinhAnh + '" />');
        document.getElementById("product-name").innerHTML = UserInfo[0].ProName;
        document.getElementById("product-num").innerHTML = UserInfo[0].SlRaGia;
        document.getElementById("product-price-now").innerHTML = UserInfo[0].GiaHienTai;
    }
});
