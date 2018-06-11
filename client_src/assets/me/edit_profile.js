$(function(){
    var UserInfo = JSON.parse(localStorage.getItem('UserInfo'));
    if(UserInfo){
        $("#name").text(UserInfo.UsName);
        console.log(UserInfo.UsName);
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