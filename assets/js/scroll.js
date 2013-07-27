$(document).ready(function () {
    $('a').click(function (e) {
        e.preventDefault();
        var a = $(this).attr('href');
        var destination = $(a).offset().top;
        $("html,body").animate({scrollTop: destination}, 300);

    });
});