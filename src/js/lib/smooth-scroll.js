/**
 * {@link https://css-tricks.com/snippets/jquery/smooth-scrolling/}
 */
(function ($, window, document, undefined) {
  'use strict';
  // Select all links with hashes
  var $body = $('body');

  $('a[href*="#"]')
  // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        window.location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
        &&
        window.location.hostname === this.hostname
      ) {
        // Figure out element to scroll to
        var $target = $(this.hash);
        $target = $target.length ? $target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if ($target.length) {
          // Only prevent default if animation is actually gonna happen
          var scrollMemory = $(document).scrollTop();
          window.location.hash = this.hash;
          $(document).scrollTop(scrollMemory);

          $('html, body').stop().animate({
            scrollTop: $target.offset().top
              - parseInt($($body.data('main') ? $body.data('main') : 'body').css('margin-top'), 10)
          }, 500, function() {
            // Callback after animation
            // Must change focus!
            var $target = $($target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          });
        }
      }
    });


  $(function () {
    var $target = $(window.location.hash);

    if ($target.length) {
      $('html, body').stop().animate({
        scrollTop: $target.offset().top
        - parseInt($($body.data('main') ? $body.data('main') : 'body').css('margin-top'), 10)
      }, 500);
    }

  });
})(jQuery, window, document);