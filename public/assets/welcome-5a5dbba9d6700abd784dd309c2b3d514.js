$(document).ready(function(){function e(){$.ajax({url:"https://api.instagram.com/v1/users/1586239279/media/recent?client_id=34060d525c58405088094409b600da10",dataType:"jsonp",cache:!0,success:function(e){for(var t=0;10>t;t++){var i=e.data[t];if(widthIsWide)var o=i.images.standard_resolution.url;else o=i.images.low_resolution.url;$("#instagram-feed").append('<img class="img-responsive" src="'+o+'">')}}})}if(viewPortWidth=getViewport()[0],viewPortHeight=getViewport()[1],widthIsWide=viewPortWidth>1024,IEVersion=getInternetExplorerVersion(),$(".masthead")){if(viewPortWidth=getViewport()[0],viewPortHeight=getViewport()[1],widthIsWide=viewPortWidth>1024,IEVersion=getInternetExplorerVersion(),widthIsWide){{var t=.75*viewPortHeight+"px";$(".navbar").outerHeight()}$(".masthead").each(function(){$(this).css("height",t),$(this).css("visibility","visible").css("opacity","1")})}var i=$(".masthead").height()/2,o=$(".intro").height()/2;$(".intro").css("margin-top",Math.floor(i-o))}window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)};var s=function(e,t,i,o){var s=e.offset().top,n=e.outerHeight(),r=s-viewPortHeight+i,a=s+n;t>=r&&a>=t&&o(r,a)};$(".owl-carousel").owlCarousel({slideSpeed:300,paginationSpeed:400,singleItem:!0,autoPlay:6e3}),widthIsWide&&($(".icon-blurb").length>0?(pricingPercent=function(){var e=window.pageYOffset;$(".pricing-box .pricing-percent").each(function(){var t=$(this),i=viewPortHeight/4;s(t,e,i,function(){t.addClass("animated fadeInUp")})})},setTimeout(function(){$(".intro").addClass("animated fadeInUp")},500)):pricingPercent=function(){}),!$("html").hasClass("lt-ie9")&&widthIsWide&&window.addEventListener("scroll",function(){$(".pricing-box").length>0&&requestAnimationFrame(pricingPercent)},!1),e();var n=$("#welcome"),r=$("nav.navbar-default").outerHeight();getViewport()[0]>=767?n.css("height",.75*(getViewport()[1]-r)):getViewport()[0]<767&&getViewport()[0]>480?n.css("height",.666667*(getViewport()[1]-r)):n.css("height","250"),$(window).on("resize",function(){if($(".masthead")){$(".masthead").css("height",.6666667*getViewport()[1]);var e=$(".masthead").height()/2,t=$(".intro").height()/2;$(".intro").css("margin-top",Math.floor(e-t))}getViewport()[0]>=767?(console.log(">= 767"),n.css("height",.75*(getViewport()[1]-r))):getViewport()[0]<767&&getViewport()[0]>480?(console.log("< 767 and > 480"),n.css("height",.666667*(getViewport()[1]-r))):(console.log("350"),n.css("height","250"))});var a=Cookies.get("leemanewsletter");if("donotshow"==a)$(".newsletter-alert").remove();else{var c=$(".newsletter-alert").outerHeight(),l=$(".lines-button").css("top"),h=c+parseInt(l,10);$(".newsletter-alert").slideDown("slow"),$(".lines-button").css("top",h),$(".newsletter-alert .close").click(function(){l=$(".lines-button").css("top"),h=parseInt(l,10)-c,Cookies.set("leemanewsletter","donotshow",{expires:5},{secure:!0}),$(".lines-button").css("top",h)}),$("#mc-embedded-subscribe").click(function(){l=$(".lines-button").css("top"),h=parseInt(l,10)-c,Cookies.set("leemanewsletter","donotshow",{expires:1095},{secure:!0}),$(".newsletter-alert").remove(),$(".lines-button").css("top",h)})}});