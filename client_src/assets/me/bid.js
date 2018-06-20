$(function () {
    HandlebarsIntl.registerWith(Handlebars);

    // // Load thông tin Product từ index.js
    // var ProInfo = localStorage.getItem('ProInfo');
    var ProInfo = JSON.parse(localStorage.getItem('ProInfo'));
    console.log(ProInfo);
    if(ProInfo){
        console.log('ProInfo: ', ProInfo[0].ProID);
        document.getElementById("product-id").value = ProInfo[0].ProID;
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
        
        $("priceInput").text(ProInfo[0].GiaHienTai);
        document.getElementById("sell-name").innerHTML = ProInfo[0].UsName;
        document.getElementById("us-email").innerHTML = ProInfo[0].Email;
        document.getElementById("us-phone").innerHTML = ProInfo[0].Phone;



        //load data form đấu giá.
        pricessuges = document.getElementById('pricesug');
        pricenow = document.getElementById('pricedef');
        // t = document.getElementById('money').value;
        t = '30000'; //Bước giá
        
        // alert(pricenow);
        total = parseInt(t.replace(/,/g , "")) + parseInt((ProInfo[0].GiaHienTai).toString().replace(/,/g , ""));
        pricessuges.value=total.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        pricenow.value=(ProInfo[0].GiaHienTai).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");


    }
    var UserInfo = JSON.parse(localStorage.getItem('UserInfo'));
    console.log(UserInfo);
    if(UserInfo){
        $("#dropdownMenuButton").text(UserInfo.user_name);
        $(".not_login").hide();
        $(".login_ok").show();
    }
    else{
        $(".login_ok").css("display", "none");
        $(".not_login").show();
    }
});

//Kiểm tra số tiền không được bé hơn mức tối thiểu
function checkmin() {
    var mon = document.getElementById('money').value.replace(/,/g , "");
    var min = document.getElementById('pricesug').value.replace(/,/g , "");
	if (parseFloat(mon) < parseFloat(min) ) {
        swal("Số tiền không hợp lệ.", "Số tiền không được bé hơn giá đề nghị!", "error");
	}
	return false;
}
$(document).on('click', '#btnDauGia', function(){
    // var id_pro = $("#product-id").val();
    var ProInfo = JSON.parse(localStorage.getItem('ProInfo'));
    console.log(ProInfo[0].ProID);
    if(ProInfo){
        // alert(id);
        var id_use = ProInfo[0].ProID;
        var objectData = {
            pro_id: ProInfo[0].ProID,
            use_id: id_use,
        };

        $.ajax({
            url: 'http://localhost:3000/offer/' + ProInfo[0].ProID,
            dataType: 'json',
            timeout: 10000,
            type: 'POST',
            data: {
                o: JSON.stringify(objectData)
            }
        }).done(function (data, errorThrown) {
            alert('jaja');
            if (errorThrown) {
                swal({
                    title: "Đấu giá thành công!",
                    type: "Thành công!",
                    confirmButtonClass: "btn-success",
                    confirmButtonText: "OK!",
                    closeOnConfirm: false
                   });  
                // var PRO_INFO = data;
                // //Put the object into storage
                // localStorage.setItem('ProInfo', JSON.stringify(PRO_INFO));
            } else {
                swal("Lỗi!", "Đấu giá thất bại. Vui lòng thử lại!", "Error");
                }
        });
    }
    else{
        swal("Lỗi!", "Vui lòng đăng nhập!", "Error")
    }
});