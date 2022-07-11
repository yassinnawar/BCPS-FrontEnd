$("form[name=signup_form").submit(function(e){
    var $form = $(this);
    var $error = $form.find(".error");
    var data = $form.serialize();

$.ajax({
    url: "/user/signup",
    type: "POST",
    data: data,
    dataType: "json",
    success: function(resp) {
        window.location.href = "/dashboard/"
    },
    error: function(resp){
        console.log(resp);
        $error.text(resp.responseJSON.error).removeClass("error--hidden");
    }
});

    e.preventDefault();
});

$("form[name=login_form").submit(function(e){
    var $form = $(this);
    var $error = $form.find(".error");
    var data = $form.serialize();

$.ajax({
    url: "/user/login",
    type: "POST",
    data: data,
    dataType: "json",
    success: function(resp) {
        window.location.href = "/dashboard/"
    },
    error: function(resp){
        console.log(resp);
        $error.text(resp.responseJSON.error).removeClass("error--hidden");
    }
});

    e.preventDefault();
});

$("form[name=newsletter_form").submit(function(e){
    var $form = $(this);
    var $error = $form.find(".error");
    var data = $form.serialize();

$.ajax({
    url: "/user/newsletter",
    type: "POST",
    data: data,
    dataType: "json",
    success: function(resp) {
        window.location.href = "/index/"
    },
    error: function(resp){
        console.log(resp);
    }
});

    e.preventDefault();
});

$("form[name=appointment_form").submit(function(e){
    var $form = $(this);
    var $error = $form.find(".error");
    var data = $form.serialize();

$.ajax({
    url: "/user/appointment",
    type: "POST",
    data: data,
    dataType: "json",
    success: function(resp) {
        window.location.href = "/index/"
    },
    error: function(resp){
        console.log(resp);
        // $error.text(resp.responseJSON.error).removeClass("error--hidden");
    }
});

    e.preventDefault();
});