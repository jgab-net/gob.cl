"use strict";
var App = {};
$(function() {
    App.init()
}), App = {
    init: function() {
        this.searchField(), this.tabs(), this.imgDesktop(), this.imgToBaground(), this.imgToBackgroundExpand(), this.search(), this.tags(), this.filters(), this.lightboxGallery(), this.login()
    },
    goToMobile: function() {
        var t = $("#article-content").offset().top - 64,
            i = this;
        $(".goToMobile").each(function(e, n) {
            var o = $(n).attr("href");
            $(n).on("click", function(e) {
                e.preventDefault(), $(".goToMobile").removeClass("link--text-dark"), $(this).addClass("link--text-dark"), $(".post-section").removeClass("active"), $(o).addClass("active"), $("html, body").animate({
                    scrollTop: t
                }, 500, function() {
                    i.stepsInit()
                })
            })
        }), $(".goToPrevNext").each(function(e, n) {
            var o = $(n).attr("href");
            $(n).on("click", function(e) {
                e.preventDefault(), $(".goToMobile").each(function(e, n) {
                    $(n).attr("href") == o && ($(".goToMobile").removeClass("link--text-dark"), $(this).addClass("link--text-dark"), $(".post-section").removeClass("active"), $(o).addClass("active"), $("html, body").animate({
                        scrollTop: t
                    }, 500, function() {
                        i.stepsInit()
                    }))
                })
            })
        })
    },
    goTo: function() {
        $(".goTo").each(function(t, i) {
            var e = $(i).attr("href"),
                n = $(e).offset().top - 64;
            $(i).click(function() {
                $("html, body").animate({
                    scrollTop: n
                }, 500)
            })
        })
    },
    postMenu: function() {
        var t = this;
        $(window).on("scroll", function() {
            $(".post-section").each(function(i, e) {
                var n = $(e),
                    o = "#" + $(e).attr("id");
                $(e).css("background", "transparent"), $("body").scrollTop() >= $(e).offset().top - 64 && $("#sidebar").find(".goTo").each(function(i, e) {
                    $(e).attr("href") == o && t.isDesktop() && ($(".goTo").removeClass("link--text-dark"), $(e).addClass("link--text-dark"))
                })
            })
        })
    },
    onResize: function(t) {
        $(window).on("resize", function() {
            t()
        })
    },
    isDesktop: function() {
        return $(window).width() >= 768
    },
    searchField: function() {
        var t = $(".search-form_input"),
            i = $(".search-form_button--cancel"),
            e = $(".search-form_button--submit");
        i.hide(), t.val() && (e.hide(), i.show()), t.on("keypress", function() {
            t.val() && (e.hide(), i.show())
        }), i.on("click", function(n) {
            n.preventDefault(), t.val(""), e.show(), i.hide()
        })
    },
    menu: function() {
        var t = $(".menu-trigger"),
            i = $(".site-nav"),
            e = $("body");
        t.on("click", function() {
            i.toggleClass("active"), e.toggleClass("menu-open-mobile")
        })
    },
    imgDesktop: function() {
        this.isDesktop() && $(".img-desktop").each(function(t, i) {
            var e = $(i).data("src");
            $(i).attr("src", e)
        })
    },
    imgToBaground: function() {
        this.isDesktop() && $(".elem-bg").each(function(t, i) {
            var e = $(i).find(".img-to-bg").attr("src");
            $(i).css("background-image", "url(" + e + ")")
        })
    },
    imgToBackgroundExpand: function() {
        var t = this;
        $(".background-image-expand").each(function(i, e) {
            var n = $(e).find(".background-image-expand_bg"),
                o = String($(e).find(".img-to-bg").attr("src"));
            n.css({
                "background-image": "url(" + o + ")"
            }), t.setElementWidth(e), t.onResize(function() {
                t.setElementWidth(e)
            })
        })
    },
    setElementWidth: function(t) {
        var i = $(t).find(".background-image-expand_bg"),
            e = $(".container").outerWidth(),
            n = $(window).outerWidth(),
            o = n - e,
            a = o / 2,
            s = $(t).outerWidth(),
            c = o + s,
            r = a + s;
        i.css({
            width: r,
            "margin-right": 0,
            "margin-left": 0
        }), $(window).outerWidth() < 992 && (i.hasClass("background-image-expand_bg--left") && i.css({
            "margin-right": -a,
            width: c
        }), i.hasClass("background-image-expand_bg--right") && i.css({
            "margin-left": -a,
            width: c
        }))
    },
    onResize: function(t) {
        $(window).on("resize", function() {
            t()
        })
    },
    tags: function() {
        $(".ctag").each(function(t, i) {
            $(i).on("click", function(t) {
                t.preventDefault(), $(this).toggleClass("active")
            })
        })
    },
    filters: function() {
        $(".filter").each(function(t, i) {
            $(i).on("click", function(t) {
                t.preventDefault(), $(this).toggleClass("active")
            })
        })
    },
    search: function() {
        $(".active-search").on("click", function(t) {
            $("body").addClass("search-active"), $("#input-search").focus()
        }), $(".toggle-search").on("click", function(t) {
            $("body").toggleClass("search-active"), $("body").hasClass("search-active") && $("#input-search").focus()
        }), $("#input-search").focusin(function() {
            $(".site-search_button-results").removeClass("fixed")
        }), $("#input-search").focusout(function() {
            $(".site-search_button-results").addClass("fixed")
        })
    },
    scroller: function() {
        $(".nano").nanoScroller({
            alwaysVisible: !0
        })
    },
    tabs: function() {
        $("ul.tabs").find(".tab").each(function(t, i) {
            $(i).find("a").on("click", function(t) {
                t.preventDefault();
                var i = $(this).attr("href");
                $("ul.tabs").find(".tab").removeClass("active"), $(this).closest(".tab").addClass("active"), $(".tab-content").removeClass("active"), $(i).addClass("active")
            })
        })
    },
    slider: function() {
        var t = this;
        this.stepsInit(), this.isDesktop() && t.stepsDestroy(), this.onResize(function() {
            t.isDesktop() && t.stepsDestroy(), t.isDesktop() || t.stepsReinit()
        })
    },
    lightboxGallery: function() {
        var t = -1,
            i = $(".gallery_item").length,
            e = [];
        $(".gallery").find(".gallery_item").each(function(n, o) {
            var a = $(this).attr("href"),
                s = {
                    index: n,
                    url: a
                };
            e.push(s), $(o).attr("data-index", n), $(o).on("click", function(o) {
                o.preventDefault(), t = n;
                var s = t + 1 == i ? 0 : t + 1;
                $(".lightbox-gallery_image").attr("src", a), $(".lightbox-gallery_image-thumbnail").attr("src", e[s].url), $(".lightbox-gallery").addClass("active")
            })
        }), $(".lightbox-gallery_link.next").on("click", function(n) {
            if (n.preventDefault(), t < i - 1) {
                var o = t + 1,
                    a = o + 1 == i ? 0 : o + 1;
                t = o, $(".lightbox-gallery_image").attr("src", e[o].url), $(".lightbox-gallery_image-thumbnail").attr("src", e[a].url)
            }
        }), $(".lightbox-gallery_link.prev").on("click", function(n) {
            if (n.preventDefault(), t > 0) {
                var o = t - 1,
                    a = o + 1 == i ? 0 : o + 1;
                t = o, $(".lightbox-gallery_image").attr("src", e[o].url), $(".lightbox-gallery_image-thumbnail").attr("src", e[a].url)
            }
        }), $(".lightbox-gallery_image-next").on("click", function(n) {
            n.preventDefault();
            var o = t + 1 == i ? 0 : t + 1,
                a = o + 1 == i ? 0 : o + 1;
            t = o, $(".lightbox-gallery_image").attr("src", e[o].url), $(".lightbox-gallery_image-thumbnail").attr("src", e[a].url)
        }), $(".lightbox-gallery_close").on("click", function(t) {
            t.preventDefault(), $(".lightbox-gallery").removeClass("active")
        })
    },
    stepsInit: function() {
        $(".post_slider").slick({
            centerMode: !0,
            centerPadding: "20px",
            arrows: !1,
            dots: !0,
            infinite: !1,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: !1
        })
    },
    stepsReinit: function() {
        $(".post_slider").slick("reInit")
    },
    stepsDestroy: function() {
        $(".post_slider").slick("unslick")
    },
    sticky: function() {
        $("#sidebar").stick_in_parent({
            parent: ".section--medium",
            offset_top: 84
        }).on("sticky_kit:stick", function(t) {}).on("sticky_kit:unstick", function(t) {})
    },
    login: function() {
        $("#loginBtn").on("click", function() {
            $(".login").toggleClass("active")
        })
    }
};