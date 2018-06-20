$(document).ready(function(){
    var UserInfo = JSON.parse(localStorage.getItem('UserInfo'));
    if(UserInfo){
        $("#username").text(UserInfo.user_name);
        $(".not_login").hide();
        $(".login_ok").show();
    }
    else{
        $(".login_ok").css("display", "none");
        $(".not_login").show();
    }
});

// $('#target').submit(function(){
//     $(this).ajaxSubmit({
//         beforeSubmit: function(formData, jqForm, options) {
//             var body = {
//                 text: "ahihihi"
//             }
//             $.ajax({
//                 url: 'http://localhost:3000/products/test',
//                 dataType: 'json',
//                 timeout: 10000,
//                 type: 'POST',
//                 contentType: 'application/json',
//                 data: JSON.stringify(body)
//             })
//         },
//         success: function showResponse(responseText, statusText, xhr, $form) {
//             alert(responseText);
//         }
//     });
//     return false;
// });