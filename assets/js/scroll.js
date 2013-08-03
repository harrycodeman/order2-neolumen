$(document).ready(function () {
    $('a').click(function (e) {

        var a = $(this).attr('href');
        if(a.substr(0,4)!='http'){
            e.preventDefault();
        var destination = $(a).offset().top;
        $("html,body").animate({scrollTop: destination}, 300);
        }
    });
});