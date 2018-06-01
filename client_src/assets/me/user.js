$('#btnRegister').on('click', function(){
    var isValid = $("#registerForm").valid();
    if (isValid) {
        var captcha_response = grecaptcha.getResponse();
        // console.log(captcha_response);
        var name = $("#name").val();
        var email = $("#email").val();
        var pass = $("#password").val();
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
                    swal("Registion Success!", "You clicked the button!", "success");
                }).fail(function(xhr, textStatus, error){
                    swal(error, "You clicked the button!", "error");
                })
            } else {
                grecaptcha.reset();
                swal("Invalid captcha.", "You clicked the button!", "error");
            }
            
        }).fail(function(xhr, textStatus, error) {
            console.log(textStatus);
            console.log(error);
            console.log(xhr);
        });
    } else {
        // swal("Good job!", "You clicked the button!", "error");
    }
})


$('#btnSignIn').on('click', function(){
    var isValid = $("#registerForm").valid();
    if (isValid) {
        var email = $("#email").val();
        var pass = $("#password").val();

        var body = {
            user_email: email,
            password: pass
        };
        $.ajax({
            url: 'http://localhost:3000/users',
            dataType: 'json',
            timeout: 10000,
            type: 'GET',
            contentType: 'application/json',
            data: JSON.stringify(body)
        }).done(function(){

        }).fail(function(){

        });
    }
});