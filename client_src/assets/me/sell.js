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