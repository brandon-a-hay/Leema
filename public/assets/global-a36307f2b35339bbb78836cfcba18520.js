function getInternetExplorerVersion(){var e=-1;if("Microsoft Internet Explorer"==navigator.appName){var n=navigator.userAgent,a=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");null!=a.exec(n)&&(e=parseFloat(RegExp.$1))}else if("Netscape"==navigator.appName){var n=navigator.userAgent,a=new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})");null!=a.exec(n)&&(e=parseFloat(RegExp.$1))}return e}getViewport=function(){var e,n;return"undefined"!=typeof window.innerWidth?(e=window.innerWidth,n=window.innerHeight):"undefined"!=typeof document.documentElement&&"undefined"!=typeof document.documentElement.clientWidth&&0!=document.documentElement.clientWidth?(e=document.documentElement.clientWidth,n=document.documentElement.clientHeight):(e=document.getElementsByTagName("body")[0].clientWidth,n=document.getElementsByTagName("body")[0].clientHeight),[e,n]};var MSIE=!1,widthIsWide=!1;$(document).ready(function(){$(".navbar-toggle").on("click",function(){$(".row-offcanvas").hasClass("nav-active")&&$("#leema-nav").hasClass("active")?($(".row-offcanvas, .navbar-default").removeClass("nav-active"),$("#leema-nav").removeClass("active"),$("#leema-nav").addClass("collapse"),$(".lines-button").removeClass("close")):($(".row-offcanvas, .navbar-default").addClass("nav-active"),$("#leema-nav").addClass("active"),$("#leema-nav").removeClass("collapse"),$(".lines-button").addClass("close"))})});