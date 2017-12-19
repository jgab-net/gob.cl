/**
 * JQuery Plugin (Radio and Checkbox tags).
 *
 * jQuery lightweight plugin boilerplate from: @addyosmani
 */
(function ($, window, document, undefined) {
  'use strict';

  var pluginName = 'tags';
  var pluginDataKey = 'gl.tags';

  var changeEvent = 'change.gl.tags';
  var cancelEvent = 'cancel.gl.tags';

  var defaults = {};

  function Plugin(element, options) {
    this.$element = $(element);

    this.options = $.extend({}, defaults, options, this.$element.data());

    this.init();
  }

  Plugin.prototype.init = function () {
    var that = this;

    this.$element
      .find('.ctag').on('click', function (e) {

        if (!$(this).is('a')) {
          // if not a link prevent default behavior
          e.preventDefault();
          // hide all elements
          that.$element.find('.ctag').toggleClass('d-none');

          // show selected element
          var $input = $(this)
            .removeClass('d-none')
            .toggleClass('active')
            .find('input');

          // if the structure have a radio change the element and fire events
          if ($input.length) {
            $input.prop('checked', $(this).hasClass('active'));

            that.options.value = $input.val();
            that.$element.trigger(
              $(this).hasClass('active') ? changeEvent : cancelEvent,
              $(this).hasClass('active') ? that.options.value : null
            );
          }
        } else if ($(this).hasClass('active')) {
          e.preventDefault();

          window.location.href = that.options.cancelLink;
        }
      })
      // if tags have radio find the active and change UI
      .each(function () {
        var $input;
        // if tags have radio
        if (!$(this).is('a')) {
          $input = $(this).find('input:checked');

          if ($input.length) {
            that.$element.find('.ctag').toggleClass('d-none');
            $(this)
              .removeClass('d-none')
              .toggleClass('active');

            that.options.value = $input.val();
            setTimeout(function () {
              that.$element.trigger(changeEvent, that.options.value);
            }, that.options.firstEventTimeout);
          }
        // if tags have links
        } else {
          $input = $(this).hasClass('active') ? $(this) : null;

          if ($input && $input.length) {
            that.$element.find('.ctag').toggleClass('d-none');

            $(this).removeClass('d-none');
          }
        }

      });
  };

  Plugin.prototype.setOptions = function (options) {
    this.options = $.extend(this.options, options);
  };

  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, pluginDataKey)) {
        $.data(this, pluginDataKey, new Plugin(this, options));
      } else {
        $.data(this, pluginDataKey).setOptions(options);
      }
    });
  };

})(jQuery, window, document);
