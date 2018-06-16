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
    }

});
