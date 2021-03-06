getViewport = function() {
    var viewPortWidth;
    var viewPortHeight;
    if (typeof window.innerWidth != 'undefined') {
        viewPortWidth = window.innerWidth,
        viewPortHeight = window.innerHeight
    }
    else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
        viewPortWidth = document.documentElement.clientWidth,
        viewPortHeight = document.documentElement.clientHeight
    }
    else {
        viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
        viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
    }
    return [viewPortWidth, viewPortHeight];
}


function getInternetExplorerVersion() {
    var a = -1;
    if ("Microsoft Internet Explorer" == navigator.appName) {
        var b = navigator.userAgent, c = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
        null != c.exec(b) && (a = parseFloat(RegExp.$1))
    } else if ("Netscape" == navigator.appName) {
        var b = navigator.userAgent, c = new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})");
        null != c.exec(b) && (a = parseFloat(RegExp.$1))
    }
    return a
}

var MSIE = false,
    widthIsWide = !1;


$(document).ready(function(){
    $('.navbar-toggle').on('click', function() {
        if (($('.row-offcanvas').hasClass('nav-active')) && ($('#leema-nav').hasClass('active'))) {

            $('.row-offcanvas, .navbar-default').removeClass('nav-active');
            $('#leema-nav').removeClass('active');
            $('#leema-nav').addClass('collapse');
            $('.lines-button').removeClass('close');

        } else {

            $('.row-offcanvas, .navbar-default').addClass('nav-active');
            $('#leema-nav').addClass('active');
            $('#leema-nav').removeClass('collapse');
            $('.lines-button').addClass('close');

        }
    });

});
