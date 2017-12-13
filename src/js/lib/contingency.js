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
    var $body = $('body');

    this.update();

    var $continueAction = this.$element.find('.contingency-continue');
    var $navigateAction = this.$element.find('.contingency-navigate');

    $continueAction.on('click', function (e) {
      if (that.onRoot()) {
        e.preventDefault();
        $body.addClass('status-continue');
        $body.removeClass('status-navigate');
        localStorage.removeItem(storageKey);
      }
    });

    $navigateAction.on('click', function (e) {
      if (that.onRoot()) {
        e.preventDefault();
        $body.removeClass('status-continue');
        $body.addClass('status-navigate');
        localStorage.setItem(storageKey, true);
      }
    });
  };

  Plugin.prototype.update = function () {
    if (this.options.active) {
      var root = this.onRoot();
      var $body = $('body');
      var stored = !!localStorage.getItem(storageKey);

      $body
        .addClass('contingency-active')
        .toggleClass('contingency-root', root);

      if (root) {
        $body
          .toggleClass('status-navigate', stored)
          .toggleClass('status-continue', !stored);
      }

    } else {
      $('body')
        .removeClass('contingency-active')
        .removeClass('contingency-root');
    }
  };

  Plugin.prototype.setOptions = function (options) {
    this.options = $.extend(this.options, options);
    this.update();
  };

  Plugin.prototype.onRoot = function () {
    if (this.options.hasOwnProperty('root')) {
      return this.options.root;
    } else {
      return location.pathname === '/';
    }
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
