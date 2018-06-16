$(document).ready(function(){
    var UserInfo = JSON.parse(localStorage.getItem('UserInfo'));
    if(UserInfo){
        console.log(UserInfo.user_name);
        console.log(UserInfo.email);
        console.log(UserInfo.password);
        $("#name").val(UserInfo.user_name)
        $("#txtbox").prop("disabled",true);
        $("#email").val(UserInfo.email);
        $("#username").text(UserInfo.user_name);
        $(".not_login").hide();
        $(".login_ok").show();
    }
    else{
        $(".login_ok").css("display", "none");
        $(".not_login").show();
    }
});

$("#btnSavePasswordChanged").on("click", function(){
    var isValid = false;
    var name = $("#name").val();
    var user_email = $("#email").val();
    var old_password = $("#password").val();
    var new_password = $("#newpass").val();
    var repeat_password = $("#repeatpass").val();

    if(name === "" || user_email === "" || old_password === "" || new_password == "" || repeat_password == ""){
        isValid = false;
    }
    // else if(pass !== UserInfo.Password){
    //     isValid == false;
    //     swal("Sai pass", "Nhập lại", "error").then(()=>{
    //         $("#password").focus();
    //     });
    // }
    else if(new_password === "" || new_password !== repeat_password){
        isValid == false;
        swal("Password vừa nhập không khớp", "Nhập lại", "error").then(()=>{
            $("#newpass").focus();
        });
    }
    else{
        isValid = true;
    }
    if(isValid === true){
        var body = {
            user_name: name,
            email: user_email,
            new_pass: new_password,
            old_password: old_password
        };
        $.ajax({
            url: 'http://localhost:3000/users/edit-profile',
            dataType: 'json',
            timeout: 10000,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(body)
        }).done(function(mess){
            swal(mess.message, "Click Ok để tiếp tục", "success")
            .then(()=>{
                window.location.href = "./sign-in.html";
            });
        }).fail(function(xhr, textStatus, error){
            swal(error, "Thông tin vừa nhập không khớp", "error");
        });
    }
})


// Copy từ file custom.js dòng 525
function previewImage(input) {
    var ext = $(input).val().split('.').pop().toLowerCase();
    if($.inArray(ext, ['gif','png','jpg','jpeg']) === -1) {
        alert('invalid extension!');
    }
    else {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $(input).parents(".profile-image").find(".image").attr("style", "background-image: url('" + e.target.result + "');" );
            };
            reader.readAsDataURL(input.files[0]);
            console.log(input.files[0].name);
        }
    }
}