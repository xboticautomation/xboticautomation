jQuery(function(e){"use strict";var o,i,n;e("#menu-wrapper").removeClass("sticky-menu"),e(window).on("scroll",function(){e(document).scrollTop()>150?e("#menu-wrapper").addClass("sticky-menu"):e("#menu-wrapper").removeClass("sticky-menu")}),e("#main-slider").waypoint(function(o){var i=e(this);if("up"===o){var n=i.attr("id");e("#menu > ul > li").removeClass("active"),e("#menu > ul > li").find('a[href="#'+n+'"]').parent().addClass("active")}},{offset:-e.waypoints("viewportHeight")}),e("#body-wrapper > div").waypoint(function(o){var i=e(this);"up"===o&&(i=i.prev());var n=i.attr("id");void 0!==n&&(e("#menu > ul > li").removeClass("active"),e("#menu > ul > li").find('a[href="#'+n+'"]').parent().addClass("active"))},{offset:100}),e("#menu > .nav > li > a, .content-nav > a").on("click",function(o){o.preventDefault(),o.stopImmediatePropagation();var i=e(this).attr("href");i&&(e(this).closest(".nav").find(">li").removeClass("active"),e(this).parent().addClass("active"),e("html, body").animate({scrollTop:e(i).offset().top-(e("#menu-wrapper").outerHeight()+5)},800))}),e("#menu-wrapper").removeClass("sticky-menu"),e(window).on("scroll",function(){e(document).scrollTop()>150?e("#menu-wrapper").addClass("sticky-menu"):e("#menu-wrapper").removeClass("sticky-menu")}),e("html").niceScroll({horizrailenabled:!1}),e("#body-wrapper").find(">div").addClass("top-indent").each(function(o){e(this).css("z-index",o)}),e("#body-wrapper").find(">div:odd").addClass("left-top-fold even").find(">div").addClass("wraper-shadow-right"),e("#body-wrapper").find(">div:even").addClass("right-top-fold odd").find(">div").addClass("wraper-shadow-left"),e("#body-wrapper").find(">div:first>div").removeClass("wraper-shadow-left"),e("#menu").find(">ul>li").each(function(){var o=e.trim(e(this).find("a").text());e(this).find("a").attr("data-title",o)}),o=e("#portfolio-items").bxSlider({minSlides:2,maxSlides:5,slideWidth:228,slideMargin:0,pager:!1,infiniteLoop:!1,useCSS:!1,controls:!1,easing:"easeOutBounce",speed:1200}),e(".portfolio-directions > .prev-items").on("click",function(){return o.goToPrevSlide(),!1}),e(".portfolio-directions > .next-items").on("click",function(){return o.goToNextSlide(),!1}),i=e("#team-items").bxSlider({minSlides:2,maxSlides:4,slideWidth:280,slideMargin:5,pager:!1,infiniteLoop:!1,useCSS:!1,controls:!1,easing:"easeInOutCirc",speed:500}),e(".team-directions > .prev-items").on("click",function(){return i.goToPrevSlide(),!1}),e(".team-directions > .next-items").on("click",function(){return i.goToNextSlide(),!1}),e(".skill-progress").hippoSkillPercentage({width:130,background:"rgba(255,255,255,0.05)",font:"14px verdana",fontColor:"#ffffff"}),function(){e(".blog-posts-list >li >a:first").tab("show");var o=e(".blog-posts-list").bxSlider({mode:"vertical",slideWidth:null,minSlides:5,slideMargin:0,pager:!1,infiniteLoop:!1,useCSS:!1,controls:!1,easing:"easeInOutCirc",speed:500});e(".blog-directions > .prev-items").on("click",function(){return o.goToPrevSlide(),!1}),e(".blog-directions > .next-items").on("click",function(){return o.goToNextSlide(),!1})}(),e(document).ready(function(){var e=new google.maps.LatLng(59.327383,18.06747),o={zoom:13,center:e,scrollwheel:!1},i=new google.maps.Map(document.getElementById("map-canvas"),o),n=new google.maps.Marker({position:e,map:i,icon:"images/map_pin.png"}),t=new google.maps.InfoWindow({content:'<div class="map-popover-content">Sweep</div>'});google.maps.event.addListener(n,"click",function(){t.open(i,n)})}),e("#modal-window").on("click","div.modal-direction > a",function(o){o.preventDefault(),console.log(e(this).attr("href"));var i=e(this).attr("href");e.get(i,function(o){e("#modal-window-content > div > *").remove(),e("#modal-window-box .modal-loading").slideDown(),e("#modal-window-content > div").hide().html(o).slideDown("slow"),e("#modal-window-box .modal-loading").slideUp()})}),n=function(o){e("#modal-window").css("top",0).removeClass("show-modal"),e("#modal-window-content > div").removeClass().html("").hide(),e("#modal-window-content > div > *").remove(),e("#modal-window-box .modal-loading").hide().delay(300).show()},e('[data-linktype="modal"]').on("click",function(o){var i,n,t;o.preventDefault(),i=e(this),n=e(i).attr("data-href")||e(i).attr("href"),t=e(i).attr("data-modalclass"),e("#modal-window").css("top",e(window).scrollTop()+0).addClass("show-modal"),e("#modal-window-wrapper").removeClass(),e.get(n,function(o){e("#modal-window-wrapper").addClass(t),e("#modal-window-box .modal-loading").slideUp(),e("#modal-window-content > div").hide().html(o).slideDown("slow")})}),e("#modal-window").on("click",".close-window",function(e){e.preventDefault(),n()}),e(".modal-overlay").on("click",function(e){n()}),e("#to-top").click(function(o){o.preventDefault(),e("html, body").animate({scrollTop:e("body").offset().top},800)})});