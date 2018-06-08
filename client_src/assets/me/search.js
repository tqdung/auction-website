$('#btnSearch').on('click', function(){
    var keywork = $("#keywork").val();
    var body = {
        serch_keywork: keywork
    };
    $.ajax({
        url: 'http://localhost:3000/search',
        dataType: 'json',
        timeout: 10000,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(body)
    }).done(function(data) {
        console.log(data);
        console.log('haha');
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