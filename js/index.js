/*Scroll transition to anchor*/
$("body.toscroll").on('click', function (e) {
    var url = e.target.href;
    var hash = url.substring(url.indexOf("#") + 1);
    $('html, body').animate({
        scrollTop: $('#' + hash).offset().top
    }, 1100);
    return false;
});