$('#btnRegister').on('click', function(){
    var isValid = $("#registerForm").valid();
    var name = $("#name").val();
    var email = $("#email").val();
    var pass = $("#password").val();
    var repeat_pass = $("#repeat_password").val();
    if(pass !== repeat_pass){
        isValid = false;
    }
    // console.log(isValid);
    if (isValid) {
        var captcha_response = grecaptcha.getResponse();
        // console.log(captcha_response);
        var body = {
            captcha_response: grecaptcha.getResponse(),
            user_name: name,
            user_email: email,
            password: pass
        };
        $.ajax({
            url: 'http://localhost:3000/users/captcha',
            dataType: 'json',
            timeout: 10000,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(body)
        }).done(function(data) {
            // console.log(data);
            if (data.success) {
                $.ajax({
                    url: 'http://localhost:3000/users',
                    dataType: 'json',
                    timeout: 10000,
                    type: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify(body)
                }).done(function(insertId){
                    swal("Đăng ký tài khoản thành công!", "Xác nhận thông tin tại tài khoản email của bạn!", "success")
                        .then(()=>{
                            window.location.href = "./sign-in.html";
                        });
                }).fail(function(xhr, textStatus, error){
                    swal(error, "Có thể email đã tồn tại, vui lòng thử lại email khác!", "error");
                })
            } else {
                grecaptcha.reset();
                swal("Captcha không hợp lệ.", "Vui lòng xác thực lại!", "error");
            }
            
        }).fail(function(xhr, textStatus, error) {
            console.log(textStatus);
            console.log(error);
            console.log(xhr);
        });
    } else {
        swal("Thông tin vừa nhập chưa chính xác!", "Kiễm tra lại thông tin!", "error");
    }
})


$('#btnSignIn').on('click', function(){
    var isValid = $("#loginForm").valid();
    if (isValid) {
        var email = $("#email").val();
        var pass = $("#password").val();

        var body = {
            user_email: email,
            password: pass
        };
        $.ajax({
            url: 'http://localhost:3000/users/login',
            dataType: 'json',
            timeout: 10000,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(body)
        }).done(function(data){
            if(data[0] === undefined){
                swal("Đăng nhập thất bại!", "Kiểm tra lại thông tin của bạn!", "error")
                    .then(()=>{
                        $("#loginForm")[0].reset();
                    });
            }
            else{
                // Đăng nhập thành công ==> redirect
                swal("Đăng nhập thành công!", "Click ok để tiếp tục!", "success")
                    .then(()=>{
                        var UserInfo = data[0];
                        // Put the object into storage
                        localStorage.setItem('UserInfo', JSON.stringify(UserInfo));
                        
                        window.location.href = "./index.html";
                        // Retrieve the object from storage
                        var retrievedObject = localStorage.getItem('UserInfo');
                        
                        console.log('retrievedObject: ', JSON.parse(retrievedObject));
                    });
            }
        }).fail(function(xhr, textStatus, error){
            swal(error, "Click button to continute", "error");
            console.log(textStatus);
            console.log(error);
            console.log(xhr);
            // javascript:;
        });
    }
});