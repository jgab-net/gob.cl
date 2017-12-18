"use strict";var App={};$(function(){App.init()}),App={init:function(){this.searchField(),this.tabs(),this.imgDesktop(),this.imgToBackground(),this.imgToBackgroundExpand(),this.search(),this.tags(),this.filters(),this.lightboxGallery(),this.login(),this.a11y(),this.contingency()},a11y:function(){$(".toolbar").toolbar()},goToMobile:function(){var t=$("#article-content").offset().top-64,i=this;$(".goToMobile").each(function(e,n){var o=$(n).attr("href");$(n).on("click",function(e){e.preventDefault(),$(".goToMobile").removeClass("link--text-dark"),$(this).addClass("link--text-dark"),$(".post-section").removeClass("active"),$(o).addClass("active"),$("html, body").animate({scrollTop:t},500,function(){i.stepsInit()})})}),$(".goToPrevNext").each(function(e,n){var o=$(n).attr("href");$(n).on("click",function(e){e.preventDefault(),$(".goToMobile").each(function(e,n){$(n).attr("href")===o&&($(".goToMobile").removeClass("link--text-dark"),$(this).addClass("link--text-dark"),$(".post-section").removeClass("active"),$(o).addClass("active"),$("html, body").animate({scrollTop:t},500,function(){i.stepsInit()}))})})})},goTo:function(){$(".goTo").each(function(t,i){var e=$(i).attr("href"),n=$(e).offset().top-64;$(i).click(function(){$("html, body").animate({scrollTop:n},500)})})},postMenu:function(){var t=this;$(window).on("scroll",function(){$(".post-section").each(function(i,e){$(e);var n="#"+$(e).attr("id");$(e).css("background","transparent"),$("body").scrollTop()>=$(e).offset().top-64&&$("#sidebar").find(".goTo").each(function(i,e){$(e).attr("href")===n&&t.isDesktop()&&($(".goTo").removeClass("link--text-dark"),$(e).addClass("link--text-dark"))})})})},isDesktop:function(){return $(window).width()>=768},searchField:function(){$(".search-form").searchField()},imgDesktop:function(){this.isDesktop()&&$(".img-desktop").each(function(t,i){var e=$(i).data("src");$(i).attr("src",e)})},imgToBackground:function(){this.isDesktop()&&$(".elem-bg").each(function(t,i){var e=$(i).find(".img-to-bg").attr("src");$(i).css("background-image","url("+e+")")})},imgToBackgroundExpand:function(){var t=this;$(".background-image-expand").each(function(i,e){var n=$(e).find(".background-image-expand_bg"),o=String($(e).find(".img-to-bg").attr("src"));n.css({"background-image":"url("+o+")"}),t.setElementWidth(e),t.onResize(function(){t.setElementWidth(e)})})},setElementWidth:function(t){var i=$(t).find(".background-image-expand_bg"),e=$(".container").outerWidth(),n=$(window).outerWidth()-e,o=n/2,s=$(t).outerWidth(),a=n+s,c=o+s;i.css({width:c,"margin-right":0,"margin-left":0}),$(window).outerWidth()<992&&(i.hasClass("background-image-expand_bg--left")&&i.css({"margin-right":-o,width:a}),i.hasClass("background-image-expand_bg--right")&&i.css({"margin-left":-o,width:a}))},onResize:function(t){$(window).on("resize",function(){t()})},tags:function(){$(".tags").tags()},filters:function(){$(".filter").each(function(t,i){$(i).on("click",function(t){t.preventDefault(),$(this).toggleClass("active")})})},search:function(){var t=$("#input-search"),i=$("#search"),e=$("#searchHero"),n=i.find(".search-form_content"),o=e.find(".search-form_content");$(".toggle-search").on("click",function(i){if($("body").toggleClass("search-active"),$("body").hasClass("search-active")){if(t.focus(),e.length>0){var s=$(o).offset().top-$(n).offset().top;$(o).css("margin-top",-s),setTimeout(function(){$(o).css("margin-top",0)},700)}}else if(e.length>0){var a=$(o).offset().top-$(n).offset().top;$(n).css("margin-top",a),setTimeout(function(){$(n).css("margin-top",0)},700)}}),t.focusin(function(){$(".site-search_button-results").removeClass("fixed")}),t.focusout(function(){$(".site-search_button-results").addClass("fixed")})},scroller:function(){$(".nano").nanoScroller({alwaysVisible:!0})},tabs:function(){$("ul.tabs").find(".tab").each(function(t,i){$(i).find("a").on("click",function(t){t.preventDefault();var i=$(this).attr("href");$("ul.tabs").find(".tab").removeClass("active"),$(this).closest(".tab").addClass("active"),$(".tab-content").removeClass("active"),$(i).addClass("active")})})},slider:function(){var t=this;this.stepsInit(),this.isDesktop()&&t.stepsDestroy(),this.onResize(function(){t.isDesktop()&&t.stepsDestroy(),t.isDesktop()||t.stepsReinit()})},lightboxGallery:function(){var t=-1,i=$(".post-gallery_item").length,e=[];$(".post-gallery").find(".post-gallery_item").each(function(n,o){var s=$(this).attr("href"),a={index:n,url:s};e.push(a),$(o).attr("data-index",n),$(o).on("click",function(o){o.preventDefault();var a=(t=n)+1===i?0:t+1;$(".lightbox-gallery_image").attr("src",s),$(".lightbox-gallery_image-thumbnail").attr("src",e[a].url),$(".lightbox-gallery").addClass("active")})}),$(".lightbox-gallery_link.next").on("click",function(n){if(n.preventDefault(),t<i-1){var o=t+1,s=o+1===i?0:o+1;t=o,$(".lightbox-gallery_image").attr("src",e[o].url),$(".lightbox-gallery_image-thumbnail").attr("src",e[s].url)}}),$(".lightbox-gallery_link.prev").on("click",function(n){if(n.preventDefault(),t>0){var o=t-1,s=o+1===i?0:o+1;t=o,$(".lightbox-gallery_image").attr("src",e[o].url),$(".lightbox-gallery_image-thumbnail").attr("src",e[s].url)}}),$(".lightbox-gallery_image-next").on("click",function(n){n.preventDefault();var o=t+1===i?0:t+1,s=o+1===i?0:o+1;t=o,$(".lightbox-gallery_image").attr("src",e[o].url),$(".lightbox-gallery_image-thumbnail").attr("src",e[s].url)}),$(".lightbox-gallery_close").on("click",function(t){t.preventDefault(),$(".lightbox-gallery").removeClass("active")})},stepsInit:function(){$(".post_slider").slick({centerMode:!0,centerPadding:"20px",arrows:!1,dots:!0,infinite:!1,speed:300,slidesToShow:1,adaptiveHeight:!1})},stepsReinit:function(){$(".post_slider").slick("reInit")},stepsDestroy:function(){$(".post_slider").slick("unslick")},sticky:function(){$("#sidebar").stick_in_parent({parent:".section--medium",offset_top:84}).on("sticky_kit:stick",function(t){}).on("sticky_kit:unstick",function(t){})},login:function(){$("#loginBtn").on("click",function(){$(".login").toggleClass("active")})},contingency:function(){$(".contingency").contingency()}};
!function(e){e.fn.collapsible=function(i,s){var t={accordion:void 0,onOpen:void 0,onClose:void 0},a=i;return i=e.extend(t,i),this.each(function(){function t(i){d=p.find("> li > .collapsible_header"),i.hasClass("active")?i.parent().addClass("active"):i.parent().removeClass("active"),i.parent().hasClass("active")?i.siblings(".collapsible_body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){e(this).css("height","")}}):i.siblings(".collapsible_body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){e(this).css("height","")}}),d.not(i).removeClass("active").parent().removeClass("active"),d.not(i).parent().children(".collapsible_body").stop(!0,!1).each(function(){e(this).is(":visible")&&e(this).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){e(this).css("height",""),n(e(this).siblings(".collapsible_header"))}})})}function l(i){i.hasClass("active")?i.parent().addClass("active"):i.parent().removeClass("active"),i.parent().hasClass("active")?i.siblings(".collapsible_body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){e(this).css("height","")}}):i.siblings(".collapsible_body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){e(this).css("height","")}})}function o(e,s){s||e.toggleClass("active"),i.accordion||"accordion"===h||void 0===h?t(e):l(e),n(e)}function n(e){e.hasClass("active")?"function"==typeof i.onOpen&&i.onOpen.call(this,e.parent()):"function"==typeof i.onClose&&i.onClose.call(this,e.parent())}function c(e){return r(e).length>0}function r(e){return e.closest("li > .collapsible_header")}function u(){p.off("click.collapse","> li > .collapsible_header")}var p=e(this),d=e(this).find("> li > .collapsible_header"),h=p.data("collapsible");if("destroy"!==a)if(s>=0&&s<d.length){var f=d.eq(s);f.length&&("open"===a||"close"===a&&f.hasClass("active"))&&o(f)}else u(),p.on("click.collapse","> li > .collapsible_header",function(i){var s=e(i.target);c(s)&&(s=r(s)),o(s)}),i.accordion||"accordion"===h||void 0===h?o(d.filter(".active").first(),!0):d.filter(".active").each(function(){o(e(this),!0)});else u()})},e(document).ready(function(){e(".collapsible").collapsible()})}(jQuery);
!function(t,n,o,e){"use strict";function i(n,o){this.$element=t(n),this.options=t.extend({},a,o,this.$element.data()),this.init()}var s="gob.cl:contingency-navigate",a={active:!1};i.prototype.init=function(){var n=this,o=t("body");this.update();var e=this.$element.find(".contingency-continue"),i=this.$element.find(".contingency-navigate");e.on("click",function(t){n.onRoot()&&(t.preventDefault(),o.addClass("status-continue"),o.removeClass("status-navigate"),localStorage.removeItem(s))}),i.on("click",function(t){n.onRoot()&&(t.preventDefault(),o.removeClass("status-continue"),o.addClass("status-navigate"),localStorage.setItem(s,!0))})},i.prototype.update=function(){if(this.options.active){var n=this.onRoot(),o=t("body"),e=!!localStorage.getItem(s);o.addClass("contingency-active").toggleClass("contingency-root",n),n&&o.toggleClass("status-navigate",e).toggleClass("status-continue",!e)}else t("body").removeClass("contingency-active").removeClass("contingency-root")},i.prototype.setOptions=function(n){this.options=t.extend(this.options,n),this.update()},i.prototype.onRoot=function(){return this.options.hasOwnProperty("root")?this.options.root:"/"===location.pathname},t.fn.contingency=function(n){return this.each(function(){t.data(this,"gl.contingency")?t.data(this,"gl.contingency").setOptions(n):t.data(this,"gl.contingency",new i(this,n))})}}(jQuery,window,document);
!function(o,e,n,a){"use strict";function t(e,n){this.$element=o(e),this.options=o.extend({},s,n,this.$element.data()),this.init()}function i(o){var e={"ẚ":"a","Á":"a","á":"a","À":"a","à":"a","Ă":"a","ă":"a","Ắ":"a","ắ":"a","Ằ":"a","ằ":"a","Ẵ":"a","ẵ":"a","Ẳ":"a","ẳ":"a","Â":"a","â":"a","Ấ":"a","ấ":"a","Ầ":"a","ầ":"a","Ẫ":"a","ẫ":"a","Ẩ":"a","ẩ":"a","Ǎ":"a","ǎ":"a","Å":"a","å":"a","Ǻ":"a","ǻ":"a","Ä":"a","ä":"a","Ǟ":"a","ǟ":"a","Ã":"a","ã":"a","Ȧ":"a","ȧ":"a","Ǡ":"a","ǡ":"a","Ą":"a","ą":"a","Ā":"a","ā":"a","Ả":"a","ả":"a","Ȁ":"a","ȁ":"a","Ȃ":"a","ȃ":"a","Ạ":"a","ạ":"a","Ặ":"a","ặ":"a","Ậ":"a","ậ":"a","Ḁ":"a","ḁ":"a","Ⱥ":"a","ⱥ":"a","Ǽ":"a","ǽ":"a","Ǣ":"a","ǣ":"a","Ḃ":"b","ḃ":"b","Ḅ":"b","ḅ":"b","Ḇ":"b","ḇ":"b","Ƀ":"b","ƀ":"b","ᵬ":"b","Ɓ":"b","ɓ":"b","Ƃ":"b","ƃ":"b","Ć":"c","ć":"c","Ĉ":"c","ĉ":"c","Č":"c","č":"c","Ċ":"c","ċ":"c","Ç":"c","ç":"c","Ḉ":"c","ḉ":"c","Ȼ":"c","ȼ":"c","Ƈ":"c","ƈ":"c","ɕ":"c","Ď":"d","ď":"d","Ḋ":"d","ḋ":"d","Ḑ":"d","ḑ":"d","Ḍ":"d","ḍ":"d","Ḓ":"d","ḓ":"d","Ḏ":"d","ḏ":"d","Đ":"d","đ":"d","ᵭ":"d","Ɖ":"d","ɖ":"d","Ɗ":"d","ɗ":"d","Ƌ":"d","ƌ":"d","ȡ":"d","ð":"d","É":"e","Ə":"e","Ǝ":"e","ǝ":"e","é":"e","È":"e","è":"e","Ĕ":"e","ĕ":"e","Ê":"e","ê":"e","Ế":"e","ế":"e","Ề":"e","ề":"e","Ễ":"e","ễ":"e","Ể":"e","ể":"e","Ě":"e","ě":"e","Ë":"e","ë":"e","Ẽ":"e","ẽ":"e","Ė":"e","ė":"e","Ȩ":"e","ȩ":"e","Ḝ":"e","ḝ":"e","Ę":"e","ę":"e","Ē":"e","ē":"e","Ḗ":"e","ḗ":"e","Ḕ":"e","ḕ":"e","Ẻ":"e","ẻ":"e","Ȅ":"e","ȅ":"e","Ȇ":"e","ȇ":"e","Ẹ":"e","ẹ":"e","Ệ":"e","ệ":"e","Ḙ":"e","ḙ":"e","Ḛ":"e","ḛ":"e","Ɇ":"e","ɇ":"e","ɚ":"e","ɝ":"e","Ḟ":"f","ḟ":"f","ᵮ":"f","Ƒ":"f","ƒ":"f","Ǵ":"g","ǵ":"g","Ğ":"g","ğ":"g","Ĝ":"g","ĝ":"g","Ǧ":"g","ǧ":"g","Ġ":"g","ġ":"g","Ģ":"g","ģ":"g","Ḡ":"g","ḡ":"g","Ǥ":"g","ǥ":"g","Ɠ":"g","ɠ":"g","Ĥ":"h","ĥ":"h","Ȟ":"h","ȟ":"h","Ḧ":"h","ḧ":"h","Ḣ":"h","ḣ":"h","Ḩ":"h","ḩ":"h","Ḥ":"h","ḥ":"h","Ḫ":"h","ḫ":"h",H:"h","̱":"h","ẖ":"h","Ħ":"h","ħ":"h","Ⱨ":"h","ⱨ":"h","Í":"i","í":"i","Ì":"i","ì":"i","Ĭ":"i","ĭ":"i","Î":"i","î":"i","Ǐ":"i","ǐ":"i","Ï":"i","ï":"i","Ḯ":"i","ḯ":"i","Ĩ":"i","ĩ":"i","İ":"i",i:"i","Į":"i","į":"i","Ī":"i","ī":"i","Ỉ":"i","ỉ":"i","Ȉ":"i","ȉ":"i","Ȋ":"i","ȋ":"i","Ị":"i","ị":"i","Ḭ":"i","ḭ":"i",I:"i","ı":"i","Ɨ":"i","ɨ":"i","Ĵ":"j","ĵ":"j",J:"j","̌":"j","ǰ":"j","ȷ":"j","Ɉ":"j","ɉ":"j","ʝ":"j","ɟ":"j","ʄ":"j","Ḱ":"k","ḱ":"k","Ǩ":"k","ǩ":"k","Ķ":"k","ķ":"k","Ḳ":"k","ḳ":"k","Ḵ":"k","ḵ":"k","Ƙ":"k","ƙ":"k","Ⱪ":"k","ⱪ":"k","Ĺ":"a","ĺ":"l","Ľ":"l","ľ":"l","Ļ":"l","ļ":"l","Ḷ":"l","ḷ":"l","Ḹ":"l","ḹ":"l","Ḽ":"l","ḽ":"l","Ḻ":"l","ḻ":"l","ł":"l","Ł":"l","̣":"l","Ŀ":"l","ŀ":"l","Ƚ":"l","ƚ":"l","Ⱡ":"l","ⱡ":"l","Ɫ":"l","ɫ":"l","ɬ":"l","ɭ":"l","ȴ":"l","Ḿ":"m","ḿ":"m","Ṁ":"m","ṁ":"m","Ṃ":"m","ṃ":"m","ɱ":"m","Ń":"n","ń":"n","Ǹ":"n","ǹ":"n","Ň":"n","ň":"n","Ñ":"n","ñ":"n","Ṅ":"n","ṅ":"n","Ņ":"n","ņ":"n","Ṇ":"n","ṇ":"n","Ṋ":"n","ṋ":"n","Ṉ":"n","ṉ":"n","Ɲ":"n","ɲ":"n","Ƞ":"n","ƞ":"n","ɳ":"n","ȵ":"n",N:"n","̈":"n",n:"n","Ó":"o","ó":"o","Ò":"o","ò":"o","Ŏ":"o","ŏ":"o","Ô":"o","ô":"o","Ố":"o","ố":"o","Ồ":"o","ồ":"o","Ỗ":"o","ỗ":"o","Ổ":"o","ổ":"o","Ǒ":"o","ǒ":"o","Ö":"o","ö":"o","Ȫ":"o","ȫ":"o","Ő":"o","ő":"o","Õ":"o","õ":"o","Ṍ":"o","ṍ":"o","Ṏ":"o","ṏ":"o","Ȭ":"o","ȭ":"o","Ȯ":"o","ȯ":"o","Ȱ":"o","ȱ":"o","Ø":"o","ø":"o","Ǿ":"o","ǿ":"o","Ǫ":"o","ǫ":"o","Ǭ":"o","ǭ":"o","Ō":"o","ō":"o","Ṓ":"o","ṓ":"o","Ṑ":"o","ṑ":"o","Ỏ":"o","ỏ":"o","Ȍ":"o","ȍ":"o","Ȏ":"o","ȏ":"o","Ơ":"o","ơ":"o","Ớ":"o","ớ":"o","Ờ":"o","ờ":"o","Ỡ":"o","ỡ":"o","Ở":"o","ở":"o","Ợ":"o","ợ":"o","Ọ":"o","ọ":"o","Ộ":"o","ộ":"o","Ɵ":"o","ɵ":"o","Ṕ":"p","ṕ":"p","Ṗ":"p","ṗ":"p","Ᵽ":"p","Ƥ":"p","ƥ":"p",P:"p","̃":"p",p:"p","ʠ":"q","Ɋ":"q","ɋ":"q","Ŕ":"r","ŕ":"r","Ř":"r","ř":"r","Ṙ":"r","ṙ":"r","Ŗ":"r","ŗ":"r","Ȑ":"r","ȑ":"r","Ȓ":"r","ȓ":"r","Ṛ":"r","ṛ":"r","Ṝ":"r","ṝ":"r","Ṟ":"r","ṟ":"r","Ɍ":"r","ɍ":"r","ᵲ":"r","ɼ":"r","Ɽ":"r","ɽ":"r","ɾ":"r","ᵳ":"r","ß":"s","Ś":"s","ś":"s","Ṥ":"s","ṥ":"s","Ŝ":"s","ŝ":"s","Š":"s","š":"s","Ṧ":"s","ṧ":"s","Ṡ":"s","ṡ":"s","ẛ":"s","Ş":"s","ş":"s","Ṣ":"s","ṣ":"s","Ṩ":"s","ṩ":"s","Ș":"s","ș":"s","ʂ":"s",S:"s","̩":"s",s:"s","Þ":"t","þ":"t","Ť":"t","ť":"t",T:"t","ẗ":"t","Ṫ":"t","ṫ":"t","Ţ":"t","ţ":"t","Ṭ":"t","ṭ":"t","Ț":"t","ț":"t","Ṱ":"t","ṱ":"t","Ṯ":"t","ṯ":"t","Ŧ":"t","ŧ":"t","Ⱦ":"t","ⱦ":"t","ᵵ":"t","ƫ":"t","Ƭ":"t","ƭ":"t","Ʈ":"t","ʈ":"t","ȶ":"t","Ú":"u","ú":"u","Ù":"u","ù":"u","Ŭ":"u","ŭ":"u","Û":"u","û":"u","Ǔ":"u","ǔ":"u","Ů":"u","ů":"u","Ü":"u","ü":"u","Ǘ":"u","ǘ":"u","Ǜ":"u","ǜ":"u","Ǚ":"u","ǚ":"u","Ǖ":"u","ǖ":"u","Ű":"u","ű":"u","Ũ":"u","ũ":"u","Ṹ":"u","ṹ":"u","Ų":"u","ų":"u","Ū":"u","ū":"u","Ṻ":"u","ṻ":"u","Ủ":"u","ủ":"u","Ȕ":"u","ȕ":"u","Ȗ":"u","ȗ":"u","Ư":"u","ư":"u","Ứ":"u","ứ":"u","Ừ":"u","ừ":"u","Ữ":"u","ữ":"u","Ử":"u","ử":"u","Ự":"u","ự":"u","Ụ":"u","ụ":"u","Ṳ":"u","ṳ":"u","Ṷ":"u","ṷ":"u","Ṵ":"u","ṵ":"u","Ʉ":"u","ʉ":"u","Ṽ":"v","ṽ":"v","Ṿ":"v","ṿ":"v","Ʋ":"v","ʋ":"v","Ẃ":"w","ẃ":"w","Ẁ":"w","ẁ":"w","Ŵ":"w","ŵ":"w",W:"w","̊":"w","ẘ":"w","Ẅ":"w","ẅ":"w","Ẇ":"w","ẇ":"w","Ẉ":"w","ẉ":"w","Ẍ":"x","ẍ":"x","Ẋ":"x","ẋ":"x","Ý":"y","ý":"y","Ỳ":"y","ỳ":"y","Ŷ":"y","ŷ":"y",Y:"y","ẙ":"y","Ÿ":"y","ÿ":"y","Ỹ":"y","ỹ":"y","Ẏ":"y","ẏ":"y","Ȳ":"y","ȳ":"y","Ỷ":"y","ỷ":"y","Ỵ":"y","ỵ":"y","ʏ":"y","Ɏ":"y","ɏ":"y","Ƴ":"y","ƴ":"y","Ź":"z","ź":"z","Ẑ":"z","ẑ":"z","Ž":"z","ž":"z","Ż":"z","ż":"z","Ẓ":"z","ẓ":"z","Ẕ":"z","ẕ":"z","Ƶ":"z","ƶ":"z","Ȥ":"z","ȥ":"z","ʐ":"z","ʑ":"z","Ⱬ":"z","ⱬ":"z","Ǯ":"z","ǯ":"z","ƺ":"z","２":"2","６":"6","Ｂ":"B","Ｆ":"F","Ｊ":"J","Ｎ":"N","Ｒ":"R","Ｖ":"V","Ｚ":"Z","ｂ":"b","ｆ":"f","ｊ":"j","ｎ":"n","ｒ":"r","ｖ":"v","ｚ":"z","１":"1","５":"5","９":"9","Ａ":"A","Ｅ":"E","Ｉ":"I","Ｍ":"M","Ｑ":"Q","Ｕ":"U","Ｙ":"Y","ａ":"a","ｅ":"e","ｉ":"i","ｍ":"m","ｑ":"q","ｕ":"u","ｙ":"y","０":"0","４":"4","８":"8","Ｄ":"D","Ｈ":"H","Ｌ":"L","Ｐ":"P","Ｔ":"T","Ｘ":"X","ｄ":"d","ｈ":"h","ｌ":"l","ｐ":"p","ｔ":"t","ｘ":"x","３":"3","７":"7","Ｃ":"C","Ｇ":"G","Ｋ":"K","Ｏ":"O","Ｓ":"S","Ｗ":"W","ｃ":"c","ｇ":"g","ｋ":"k","ｏ":"o","ｓ":"s","ｗ":"w"};if(!o)return"";for(var n="",a=0;a<o.length;a++)n+=e[o.charAt(a)]||o.charAt(a);return n}var s={viewFilter:!1,scrappingValue:"search-value",scrappingClass:".searchable",groups:[]};t.prototype.init=function(){var o=this.$element.find(".search-form_input"),e=this.$element.find(".search-form_button--cancel");this.$element.find(".search-form_button--submit");e.addClass("d-none"),o.val()&&e.removeClass("d-none"),o.on("input",function(){o.val()?e.removeClass("d-none"):e.addClass("d-none")}),e.on("click",function(){o.val(""),e.addClass("d-none")}),this.options.viewFilter&&this.configureViewFilterBehavior()},t.prototype.configureViewFilterBehavior=function(){var e=this;this.$element.find(".search-form_input").on("input",function(){var n=i(this.value);o(e.options.scrappingClass).each(function(a,t){var s=o(t);s.removeClass("d-none"),-1===i(s.data(e.options.scrappingValue)).search(new RegExp(n,"gi"))&&s.addClass("d-none")}),e.groupBehavior()}).end().find(".search-form_button--cancel").on("click",function(){o(e.options.scrappingClass).each(function(n,a){o(a).removeClass("d-none"),e.groupBehavior()})})},t.prototype.groupBehavior=function(){var e=this;this.options.groups.forEach(function(n){o(".search-not-found.not-found-"+n.substr(1)).toggleClass("not-found",o(e.options.scrappingClass+n).length===o(e.options.scrappingClass+n+".d-none").length)})},t.prototype.setOptions=function(e){this.options=o.extend(this.options,e)},o.fn.searchField=function(e){return this.each(function(){o.data(this,"gl.search")?o.data(this,"gl.search").setOptions(e):o.data(this,"gl.search",new t(this,e))})}}(jQuery,window,document);
!function(t,e,n,i){"use strict";function s(e,n){this.$element=t(e),this.options=t.extend({},a,n,this.$element.data()),this.init()}var a={};s.prototype.init=function(){var e=this;this.$element.find(".ctag").on("click",function(n){if(!t(this).is("a")){n.preventDefault(),e.$element.find(".ctag").toggleClass("d-none");var i=t(this).removeClass("d-none").toggleClass("active").find("input");i.length&&(i.prop("checked",t(this).hasClass("active")),e.options.value=i.val(),e.$element.trigger(t(this).hasClass("active")?"change.gl.tags":"cancel.gl.tags",t(this).hasClass("active")?e.options.value:null))}}).each(function(){var n=t(this).find("input:checked");n.length&&(e.$element.find(".ctag").toggleClass("d-none"),t(this).removeClass("d-none").toggleClass("active"),e.options.value=n.val(),setTimeout(function(){e.$element.trigger("change.gl.tags",e.options.value)},e.options.firstEventTimeout))})},s.prototype.setOptions=function(e){this.options=t.extend(this.options,e)},t.fn.tags=function(e){return this.each(function(){t.data(this,"gl.tags")?t.data(this,"gl.tags").setOptions(e):t.data(this,"gl.tags",new s(this,e))})}}(jQuery,window,document);
!function(t,e,o,n){"use strict";var s=function(){function e(e,o){this.$element=t(e),this.options=t.extend({},n,o,{values:this.$element.data("values"),value:this.$element.data("value"),index:(this.$element.data("values")||[]).indexOf(this.$element.data("value"))}),this.init()}var o,n={value:"16px",index:0,values:["16px","20px","24px"],classes:["a11y-font-0","a11y-font-1","a11y-font-2"]};return e.prototype.init=function(){var e=this;this.options.index=this._getIndex(),this._update();var o=t(".toolbar-button--less"),n=t(".toolbar-button--plus"),s=t(".toolbar"),i=t(".toolbar-player"),a=t(".toolbar-button--toggle"),l=t(".toolbar-button--listen"),u=t(".toolbar-player_toggle");a.on("click",function(t){t.preventDefault(),s.toggleClass("active")}),l.on("click",function(e){e.preventDefault(),t(this).addClass("invisible"),i.removeClass("invisible")}),u.on("click",function(t){t.preventDefault(),i.toggleClass("pause")}),o.on("click",function(t){t.preventDefault(),!o.hasClass("disabled")&&e.options.index>0&&(e.options.index=e._getIndex()-1,e.options.value=e.options.values[e.options.index],e._update(),e.$element.trigger("change.gl.toolbar",e.options.value))}),n.on("click",function(t){t.preventDefault(),!n.hasClass("disabled")&&e.options.index<e.options.values.length&&(e.options.index=e._getIndex()+1,e.options.value=e.options.values[e.options.index],e._update(),e.$element.trigger("change.gl.toolbar",e.options.value))})},e.prototype._getIndex=function(){return(this.options.values||[]).indexOf(this.options.value)},e.prototype._update=function(){t("html").css({fontSize:this.options.value}).removeClass(this.options.classes.join(" ")).addClass(this.options.classes[this.options.index]);var e=t(".toolbar-button--less"),o=t(".toolbar-button--plus");e.removeClass("disabled"),o.removeClass("disabled"),0===this.options.index&&e.addClass("disabled"),this.options.index===this.options.values.length-1&&o.addClass("disabled")},e.prototype.setOptions=function(e){this.options=t.extend(this.options,e)},{getInstance:function(t,n){return o||(o=new e(t,n)),o}}}();t.fn.toolbar=function(e){return this.each(function(){t.data(this,"gl.toolbar")?t.data(this,"gl.toolbar").setOptions(e):t.data(this,"gl.toolbar",s.getInstance(this,e))})}}(jQuery,window,document);