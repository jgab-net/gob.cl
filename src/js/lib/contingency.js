/**
 * JQuery Plugin (Contingency Widget).
 *
 * jQuery lightweight plugin boilerplate from: @addyosmani
 */
(function ($, window, document, undefined) {
  'use strict';

  var pluginName = 'contingency';
  var pluginDataKey = 'gl.contingency';
  var storageKey = 'gob.cl:contingency-navigate';

  var defaults = {
    active: false
  };

  function Plugin(element, options) {
    this.$element = $(element);

    this.options = $.extend({}, defaults, options, this.$element.data());

    this.init();
  }

  Plugin.prototype.init = function () {
    var that = this;

    this.update();

    var $continueAction =this.$element.find('.contingency-continue');
    var $navigateAction = this.$element.find('.contingency-navigate');

    if (!!localStorage.getItem(storageKey)) {
      this.$element.addClass('status-navigate');
    } else {
      this.$element.removeClass('status-navigate');
    }

    $continueAction.on('click', function () {
      that.$element.removeClass('status-navigate');
      localStorage.removeItem(storageKey);
    });

    $navigateAction.on('click', function () {
      that.$element.addClass('status-navigate');
      localStorage.setItem(storageKey, true);
    });
  };

  Plugin.prototype.update = function () {
    if (this.options.active) {
      this.$element.addClass('status-contingency');
      this.$element.removeClass('status-normal');
    } else {
      this.$element.removeClass('status-contingency');
      this.$element.addClass('status-normal');
    }
  };

  Plugin.prototype.setOptions = function (options) {
    this.options = $.extend(this.options, options);
    this.update();
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
