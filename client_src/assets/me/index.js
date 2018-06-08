var CUR_PAGE = 1;

$(function() {
    HandlebarsIntl.registerWith(Handlebars);
    loadProNums();
});




// $(function() {
//     HandlebarsIntl.registerWith(Handlebars);
//     loadProDetail();
// });

var loadProDetail = function(id) {
    console.log(id)
    $.ajax({
        url: 'http://localhost:3000/products/' + id,
        dataType: 'json',
        timeout: 10000
    }).done(function(data) {
        var source = $('#product-detail').html();
        // var source1 = $('#product-detail1').html();
        var template = Handlebars.compile(source);
        var html = template(data.image);
        console.log(source);
        // var template1 = Handlebars.compile(source);
        // var html1 = template(data.image);
        $('#product-list-detail').append(html);
        // $('#product-list-detail-1').append(html1);
        $('#product-list-detail div[style]').fadeIn(200, function() {
            $(this).removeAttr('style');
        });

    });
};
$(function() {
    HandlebarsIntl.registerWith(Handlebars);
    load();
});

var load = function() {
    $('.loader').show();

    $.ajax({
        url: 'http://localhost:3000/products?page=' + CUR_PAGE,
        dataType: 'json',
        timeout: 10000
    }).done(function(data) {
        console.log(data);
        var source = $('#product-template').html();
        var template = Handlebars.compile(source);
        var html = template(data.products);
        var html2 = template(data2.products);
        var html3 = template(data3.products);
        $('#product-list-price').append(html);
        $('#product-list-num').append(html);
        $('#product-list-time').append(html);

        $('#product-list-price div[style]').fadeIn(200, function() {
            $(this).removeAttr('style');
        });
        $('#product-list-num div[style]').fadeIn(200, function() {
            $(this).removeAttr('style');
        });
        $('#product-list-time div[style]').fadeIn(200, function() {
            $(this).removeAttr('style');
        });

        CUR_PAGE++;
        if (data.hasMore === false) {
            $('#btnMorePrice').hide();
        }

        $('.loaderprice').hide();
    });
};

