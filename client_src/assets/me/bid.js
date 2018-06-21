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
        document.getElementById("product-name").value = ProInfo[0].ProName;
        document.getElementById("product-num").value = ProInfo[0].SlRaGia;
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

var fnf = document.getElementById("money");
fnf.addEventListener('keyup', function(evt){
    var n = parseInt(this.value.replace(/\D/g,''),10);
    fnf.value = n.toLocaleString();
}, false);
$(document).on('click', '#btnDauGia', function(){
    // var id_pro = $("#product-id").val();
    var ProInfo = JSON.parse(localStorage.getItem('ProInfo'));
    var UserInfo = JSON.parse(localStorage.getItem('UserInfo'));

    if(ProInfo && UserInfo !== null){
        var tzoffset = (new Date()).getTimezoneOffset() * 60000;
        var id_pro = ProInfo[0].ProID;
        var id_use = UserInfo.user_id;
        var date = (new Date(Date.now() - tzoffset)).toISOString().slice(0, 19).replace('T', ' ');
        var money = $('#money').val().toString().replace(/,/g , "");
        var proname = $('#product-name').val();
        var numprice = $('#product-num').val();
        // alert(parseInt(numprice) + 1);
        if(money===""){
            alert('Vui lòng nhập số tiền!');
        }
        swal({
            title: "Ra giá?",
            text: "Bạn có chắc chắn muốn ra giá?",
            icon: "Cảnh báo",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                numprice = parseInt(numprice) + 1;
                $.ajax({
                    url: `http://localhost:3000/offer?id=${id_pro}&&idus=${id_use}&&date='${date}'&&money=${money}&&proname='${proname}'&&numprice=${parseInt(numprice)}`,
                    dataType: 'json',
                    timeout: 10000,
                    type: 'POST',
                }).fail(function (data, errorThrown) {
                    if (data) {
                           swal({
                            title:"Đấu giá thành công!",
                            text:"Thành công!",
                            icon: "success",
                            buttons: true}).then((willDelete) => {
                                if (willDelete) {
                            var body = {
                            proid_key: id_pro,
                            };
                            $.ajax({
                                url: 'http://localhost:3000/bid/' + id_pro,
                                dataType: 'json',
                                timeout: 10000,
                                type: 'POST',
                                data: JSON.stringify(body)
                            }).done(function (data, errorThrown) {
                                if (errorThrown) {
                                    var PRO_INFO = data;
                                    //Put the object into storage
                                    localStorage.setItem('ProInfo', JSON.stringify(PRO_INFO));
                                    window.location.reload();
                                } else {
                                        alert("Failed " + errorThrown);
                                    }
                            });
                        }
                    });
                    } else {
                        swal("Lỗi!", "Đấu giá thất bại. Vui lòng thử lại!", "Error");
                        }
                });
            } else {
              swal("Chưa thực hiện đấu giá!");
            }
          });
        
    }
    else{
        swal("Lỗi!", "Vui lòng đăng nhập!", "Error")
    }
});


$(document).on('click', '#btnLichSu', function(){
    // var id_pro = $("#product-id").val();
    var ProInfo = JSON.parse(localStorage.getItem('ProInfo'));
    var UserInfo = JSON.parse(localStorage.getItem('UserInfo'));
    var id_pro = ProInfo[0].ProID;
    if(ProInfo && UserInfo !== null){
    $.ajax({
        url: 'http://localhost:3000/offer/' + id_pro,
        dataType: 'json',
        type:'POST',
        timeout:10000
    }).done(function(data, errorThrown) {
        if (errorThrown) {
            var source = $('#product-history').html();
            var template = Handlebars.compile(source);
            console.log(data);
            var html = template(data.historys);
            $('#product-list-his').append(html);
            $('#product-list-his div[style]').fadeIn(200, function () {
                $(this).removeAttr('style');
            });
        } else {
            swal("Không tìm thấy sản phẩm ", "error");
            }
            
    });

    }
else{
    swal("Lỗi!", "Vui lòng đăng nhập!", "Error")
}
});

$(document).on('click', '#btnThoat', function(){
    window.location.reload();
});
