'use strict';

$(function () {
  GobCl.init();
});

var GobCl = (function () {

  var GobClBuilder = {
    a11y: function () {
      $('.toolbar').toolbar();
    },
    isDesktop: function () {
      return $(window).width() >= 768;
    },
    searchField: function () {
      $('.search-form').searchField();
    },
    tags: function () {
      $('.tags').tags();
    },
    imgToBackground: function () {
      $('.elem-bg').each(function (index, el) {
        var srcImg = $(el).find('.img-to-bg').attr('src');
        if (srcImg) {
          $(el).css('background-image', 'url(' + srcImg + ')');
        }
      });
    },
    search: function () {
      var $inputSearch = $('#input-search');
      var $search = $('#search');
      var $searchHero = $('#searchHero');
      var searchContent = $search.find('.search-form_content');
      var searchHeroContent = $searchHero.find('.search-form_content');

      $('.toggle-search').on('click', function (e) {
        var $body = $('body').toggleClass('search-active');
        if ($body.hasClass('search-active')) {
          $inputSearch.focus();
          if ($searchHero.length > 0) {
            var posSearch = $(searchHeroContent).offset().top - $(searchContent).offset().top;
            $(searchHeroContent).css('margin-top', -(posSearch));
            setTimeout(function () {
              $(searchHeroContent).css('margin-top', 0);
            }, 700);
          }
        } else {
          if ($searchHero.length > 0) {
            var posSearchHero = $(searchHeroContent).offset().top - $(searchContent).offset().top;
            $(searchContent).css('margin-top', posSearchHero);
            setTimeout(function () {
              $(searchContent).css('margin-top', 0);
            }, 700);
          }
        }
      });
    },
    scroller: function () {
      $(".nano").nanoScroller({
        alwaysVisible: true
      });
    },
    contingency: function () {
      $('.contingency').contingency();
    },
    build: function () {
      this.searchField();
      this.search();
      this.tags();
      this.a11y();
      this.contingency();
      this.imgToBackground();
    }
  };

  return {
    init: function () {
      GobClBuilder.build();
    },
    closeReadSpeaker: function () {
      $('.rsbtn_closer').click();
    }
  }
})();