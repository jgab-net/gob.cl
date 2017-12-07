"use strict";var App={};$(function(){App.init()}),App={init:function(){this.searchField(),this.tabs(),this.imgDesktop(),this.imgToBaground(),this.imgToBackgroundExpand(),this.search(),this.tags(),this.filters(),this.lightboxGallery(),this.login(),this.a11y()},a11y:function(){$(".toolbar").toolbar()},goToMobile:function(){var t=$("#article-content").offset().top-64,i=this;$(".goToMobile").each(function(e,n){var o=$(n).attr("href");$(n).on("click",function(e){e.preventDefault(),$(".goToMobile").removeClass("link--text-dark"),$(this).addClass("link--text-dark"),$(".post-section").removeClass("active"),$(o).addClass("active"),$("html, body").animate({scrollTop:t},500,function(){i.stepsInit()})})}),$(".goToPrevNext").each(function(e,n){var o=$(n).attr("href");$(n).on("click",function(e){e.preventDefault(),$(".goToMobile").each(function(e,n){$(n).attr("href")==o&&($(".goToMobile").removeClass("link--text-dark"),$(this).addClass("link--text-dark"),$(".post-section").removeClass("active"),$(o).addClass("active"),$("html, body").animate({scrollTop:t},500,function(){i.stepsInit()}))})})})},goTo:function(){$(".goTo").each(function(t,i){var e=$(i).attr("href"),n=$(e).offset().top-64;$(i).click(function(){$("html, body").animate({scrollTop:n},500)})})},postMenu:function(){var t=this;$(window).on("scroll",function(){$(".post-section").each(function(i,e){$(e);var n="#"+$(e).attr("id");$(e).css("background","transparent"),$("body").scrollTop()>=$(e).offset().top-64&&$("#sidebar").find(".goTo").each(function(i,e){$(e).attr("href")==n&&t.isDesktop()&&($(".goTo").removeClass("link--text-dark"),$(e).addClass("link--text-dark"))})})})},isDesktop:function(){return $(window).width()>=768},searchField:function(){var t=$(".search-form_input"),i=$(".search-form_button--cancel"),e=$(".search-form_button--submit");i.addClass("d-none"),t.val()&&(e.addClass("d-none"),i.removeClass("d-none")),t.on("input",function(){t.val()?(e.addClass("d-none"),i.removeClass("d-none")):(e.removeClass("d-none"),i.addClass("d-none"))}),i.on("click",function(){t.val(""),e.removeClass("d-none"),i.addClass("d-none")})},imgDesktop:function(){this.isDesktop()&&$(".img-desktop").each(function(t,i){var e=$(i).data("src");$(i).attr("src",e)})},imgToBaground:function(){this.isDesktop()&&$(".elem-bg").each(function(t,i){var e=$(i).find(".img-to-bg").attr("src");$(i).css("background-image","url("+e+")")})},imgToBackgroundExpand:function(){var t=this;$(".background-image-expand").each(function(i,e){var n=$(e).find(".background-image-expand_bg"),o=String($(e).find(".img-to-bg").attr("src"));n.css({"background-image":"url("+o+")"}),t.setElementWidth(e),t.onResize(function(){t.setElementWidth(e)})})},setElementWidth:function(t){var i=$(t).find(".background-image-expand_bg"),e=$(".container").outerWidth(),n=$(window).outerWidth()-e,o=n/2,s=$(t).outerWidth(),a=n+s,r=o+s;i.css({width:r,"margin-right":0,"margin-left":0}),$(window).outerWidth()<992&&(i.hasClass("background-image-expand_bg--left")&&i.css({"margin-right":-o,width:a}),i.hasClass("background-image-expand_bg--right")&&i.css({"margin-left":-o,width:a}))},onResize:function(t){$(window).on("resize",function(){t()})},tags:function(){$(".tags").tags()},filters:function(){$(".filter").each(function(t,i){$(i).on("click",function(t){t.preventDefault(),$(this).toggleClass("active")})})},search:function(){var t=$("#input-search"),i=$("#search"),e=$("#searchHero"),n=i.find(".search-form_content"),o=e.find(".search-form_content");$(".toggle-search").on("click",function(i){if($("body").toggleClass("search-active"),$("body").hasClass("search-active")){if(t.focus(),e.length>0){var s=$(o).offset().top-$(n).offset().top;$(o).css("margin-top",-s),setTimeout(function(){$(o).css("margin-top",0)},700)}}else if(e.length>0){var a=$(o).offset().top-$(n).offset().top;$(n).css("margin-top",a),setTimeout(function(){$(n).css("margin-top",0)},700)}}),t.focusin(function(){$(".site-search_button-results").removeClass("fixed")}),t.focusout(function(){$(".site-search_button-results").addClass("fixed")})},scroller:function(){$(".nano").nanoScroller({alwaysVisible:!0})},tabs:function(){$("ul.tabs").find(".tab").each(function(t,i){$(i).find("a").on("click",function(t){t.preventDefault();var i=$(this).attr("href");$("ul.tabs").find(".tab").removeClass("active"),$(this).closest(".tab").addClass("active"),$(".tab-content").removeClass("active"),$(i).addClass("active")})})},slider:function(){var t=this;this.stepsInit(),this.isDesktop()&&t.stepsDestroy(),this.onResize(function(){t.isDesktop()&&t.stepsDestroy(),t.isDesktop()||t.stepsReinit()})},lightboxGallery:function(){var t=-1,i=$(".post-gallery_item").length,e=[];$(".post-gallery").find(".post-gallery_item").each(function(n,o){var s=$(this).attr("href"),a={index:n,url:s};e.push(a),$(o).attr("data-index",n),$(o).on("click",function(o){o.preventDefault();var a=(t=n)+1==i?0:t+1;$(".lightbox-gallery_image").attr("src",s),$(".lightbox-gallery_image-thumbnail").attr("src",e[a].url),$(".lightbox-gallery").addClass("active")})}),$(".lightbox-gallery_link.next").on("click",function(n){if(n.preventDefault(),t<i-1){var o=t+1,s=o+1==i?0:o+1;t=o,$(".lightbox-gallery_image").attr("src",e[o].url),$(".lightbox-gallery_image-thumbnail").attr("src",e[s].url)}}),$(".lightbox-gallery_link.prev").on("click",function(n){if(n.preventDefault(),t>0){var o=t-1,s=o+1==i?0:o+1;t=o,$(".lightbox-gallery_image").attr("src",e[o].url),$(".lightbox-gallery_image-thumbnail").attr("src",e[s].url)}}),$(".lightbox-gallery_image-next").on("click",function(n){n.preventDefault();var o=t+1==i?0:t+1,s=o+1==i?0:o+1;t=o,$(".lightbox-gallery_image").attr("src",e[o].url),$(".lightbox-gallery_image-thumbnail").attr("src",e[s].url)}),$(".lightbox-gallery_close").on("click",function(t){t.preventDefault(),$(".lightbox-gallery").removeClass("active")})},stepsInit:function(){$(".post_slider").slick({centerMode:!0,centerPadding:"20px",arrows:!1,dots:!0,infinite:!1,speed:300,slidesToShow:1,adaptiveHeight:!1})},stepsReinit:function(){$(".post_slider").slick("reInit")},stepsDestroy:function(){$(".post_slider").slick("unslick")},sticky:function(){$("#sidebar").stick_in_parent({parent:".section--medium",offset_top:84}).on("sticky_kit:stick",function(t){}).on("sticky_kit:unstick",function(t){})},login:function(){$("#loginBtn").on("click",function(){$(".login").toggleClass("active")})}};
!function(e){e.fn.collapsible=function(i,s){var t={accordion:void 0,onOpen:void 0,onClose:void 0},a=i;return i=e.extend(t,i),this.each(function(){function t(i){d=p.find("> li > .collapsible_header"),i.hasClass("active")?i.parent().addClass("active"):i.parent().removeClass("active"),i.parent().hasClass("active")?i.siblings(".collapsible_body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){e(this).css("height","")}}):i.siblings(".collapsible_body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){e(this).css("height","")}}),d.not(i).removeClass("active").parent().removeClass("active"),d.not(i).parent().children(".collapsible_body").stop(!0,!1).each(function(){e(this).is(":visible")&&e(this).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){e(this).css("height",""),n(e(this).siblings(".collapsible_header"))}})})}function l(i){i.hasClass("active")?i.parent().addClass("active"):i.parent().removeClass("active"),i.parent().hasClass("active")?i.siblings(".collapsible_body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){e(this).css("height","")}}):i.siblings(".collapsible_body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){e(this).css("height","")}})}function o(e,s){s||e.toggleClass("active"),i.accordion||"accordion"===h||void 0===h?t(e):l(e),n(e)}function n(e){e.hasClass("active")?"function"==typeof i.onOpen&&i.onOpen.call(this,e.parent()):"function"==typeof i.onClose&&i.onClose.call(this,e.parent())}function c(e){return r(e).length>0}function r(e){return e.closest("li > .collapsible_header")}function u(){p.off("click.collapse","> li > .collapsible_header")}var p=e(this),d=e(this).find("> li > .collapsible_header"),h=p.data("collapsible");if("destroy"!==a)if(s>=0&&s<d.length){var f=d.eq(s);f.length&&("open"===a||"close"===a&&f.hasClass("active"))&&o(f)}else u(),p.on("click.collapse","> li > .collapsible_header",function(i){var s=e(i.target);c(s)&&(s=r(s)),o(s)}),i.accordion||"accordion"===h||void 0===h?o(d.filter(".active").first(),!0):d.filter(".active").each(function(){o(e(this),!0)});else u()})},e(document).ready(function(){e(".collapsible").collapsible()})}(jQuery);
!function(t,e,n,i){"use strict";function s(e,n){this.$element=t(e),this.options=t.extend({},a,n,this.$element.data()),this.init()}var a={firstEventTimeout:50};s.prototype.init=function(){var e=this;this.$element.find(".ctag").on("click",function(n){if(!t(this).is("a")){n.preventDefault(),e.$element.find(".ctag").toggleClass("d-none");var i=t(this).removeClass("d-none").toggleClass("active").find("input");i.length&&(i.prop("checked",t(this).hasClass("active")),e.options.value=i.val(),e.$element.trigger(t(this).hasClass("active")?"change.gl.tags":"cancel.gl.tags",t(this).hasClass("active")?e.options.value:null))}}).each(function(){var n=t(this).find("input:checked");n.length&&(e.$element.find(".ctag").toggleClass("d-none"),t(this).removeClass("d-none").toggleClass("active"),e.options.value=n.val(),setTimeout(function(){e.$element.trigger("change.gl.tags",e.options.value)},e.options.firstEventTimeout))})},s.prototype.setOptions=function(e){this.options=t.extend(this.options,e)},t.fn.tags=function(e){return this.each(function(){t.data(this,"gl.tags")?t.data(this,"gl.tags").setOptions(e):t.data(this,"gl.tags",new s(this,e))})}}(jQuery,window,document);
!function(t,e,o,n){"use strict";var s=function(){function e(e,o){this.$element=t(e),this.options=t.extend({},n,o,{values:this.$element.data("values"),value:this.$element.data("value"),index:(this.$element.data("values")||[]).indexOf(this.$element.data("value"))}),this.init()}var o,n={value:"16px",index:0,values:["16px","20px","24px"],classes:["a11y-font-0","a11y-font-1","a11y-font-2"]};return e.prototype.init=function(){var e=this;this.options.index=this._getIndex(),this._update();var o=t(".toolbar-button--less"),n=t(".toolbar-button--plus"),s=t(".toolbar"),i=t(".toolbar-player"),a=t(".toolbar-button--toggle"),l=t(".toolbar-button--listen"),u=t(".toolbar-player_toggle");a.on("click",function(t){t.preventDefault(),s.toggleClass("active")}),l.on("click",function(e){e.preventDefault(),t(this).addClass("invisible"),i.removeClass("invisible")}),u.on("click",function(t){t.preventDefault(),i.toggleClass("pause")}),o.on("click",function(t){t.preventDefault(),!o.hasClass("disabled")&&e.options.index>0&&(e.options.index=e._getIndex()-1,e.options.value=e.options.values[e.options.index],e._update(),e.$element.trigger("change.gl.toolbar",e.options.value))}),n.on("click",function(t){t.preventDefault(),!n.hasClass("disabled")&&e.options.index<e.options.values.length&&(e.options.index=e._getIndex()+1,e.options.value=e.options.values[e.options.index],e._update(),e.$element.trigger("change.gl.toolbar",e.options.value))})},e.prototype._getIndex=function(){return(this.options.values||[]).indexOf(this.options.value)},e.prototype._update=function(){t("html").css({fontSize:this.options.value}).removeClass(this.options.classes.join(" ")).addClass(this.options.classes[this.options.index]);var e=t(".toolbar-button--less"),o=t(".toolbar-button--plus");e.removeClass("disabled"),o.removeClass("disabled"),0===this.options.index&&e.addClass("disabled"),this.options.index===this.options.values.length-1&&o.addClass("disabled")},e.prototype.setOptions=function(e){this.options=t.extend(this.options,e)},{getInstance:function(t,n){return o||(o=new e(t,n)),o}}}();t.fn.toolbar=function(e){return this.each(function(){t.data(this,"gl.toolbar")?t.data(this,"gl.toolbar").setOptions(e):t.data(this,"gl.toolbar",s.getInstance(this,e))})}}(jQuery,window,document);