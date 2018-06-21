var CUR_PAGE = 1;

$(function () {
    HandlebarsIntl.registerWith(Handlebars);
    // // Load thông tin Product từ index.js
    // var SearchInfo = localStorage.getItem('SearchInfo');
    var SearchInfo = JSON.parse(localStorage.getItem('SearchInfo'));
    console.log(SearchInfo);

    if(SearchInfo){
        var source = $('#product-search').html();
        var template = Handlebars.compile(source);
        var html = template(SearchInfo.products);
        $('#product-list-search').append(html);
        $('#product-list-search div[style]').fadeIn(200, function () {
            $(this).removeAttr('style');
        });
        arrayLength = SearchInfo.products.length;
        for (var i = 0; i < arrayLength; i++) {
        var austDay = new Date();
        str = SearchInfo.products[i].NgayKT;
            var year = str.slice(0,4);
            var month = str.slice(5, 7);
            var date = str.slice(8, 10);
            idPro = SearchInfo.products[i]  .ProID;
            austDay = new Date(year, month - 1, date);
            $('.defaultCountdown'+ idPro).countdown({until: austDay});
        }
    }
    var UserInfo = JSON.parse(localStorage.getItem('UserInfo'));
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

$(function () {
    HandlebarsIntl.registerWith(Handlebars);
    load();
});

var load = function() {
    $('.loadersearch').show();
};

//Đấu giá sản phẩm.
// $('#btnBid').on('click', function(){
    $(document).on('click', '#btnBid', function() {
        $('.loadersearch').show();
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
        
        CUR_PAGE++;
        if (data.hasMore === false) {
            $('#btnMore').hide();
        }

        $('.loadersearch').hide();
    });
    