$('#btnSearch').on('click', function(){

    var keyword = $('#key').val();
    var body = {
        serch_keyword: keyword
    };
    $.ajax({
        url: 'http://localhost:3000/search?' + keyword,
        dataType: 'json',
        timeout: 10000,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(body)
    }).done(function(data) {
        console.log(data);
        if (data.success) {
            // $.ajax({
            //     url: 'http://localhost:3000/search/',
            //     dataType: 'json',
            //     timeout: 10000,
            //     type: 'POST',
            //     contentType: 'application/json',
            //     data: JSON.stringify(body)
            // }).done(function(insertId){
        swal("Thành công", "success")
            .then(()=>{
                window.location.href = "./search.html";
            });
        //     }).fail(function(xhr, textStatus, error){
        //         swal(error, "Lỗi!", "error");
        //     })
        // } else {
        //     swal("Lỗi 2", "Lỗi 2!", "error");
        }
    });
})