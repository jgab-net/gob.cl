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

    this.options = $.extend({}, defaults, options, this.$element.data(),
      JSON.parse(localStorage.getItem(storageKey))
    );

    this.init();
  }

  Plugin.prototype.init = function () {
    var that = this;
    var $body = $('body');

    this.update();

    var $continueAction = this.$element.find('.contingency-continue .contingency-link');
    var $navigateAction = this.$element.find('.contingency-navigate');
    var $list = this.$element.find('.contingency-continue .contingency-list');

    $list.on('click', function (e) {
      e.preventDefault();
      that.$element.find('.contingency-continue').toggleClass('show');
    });

    $continueAction.on('click', function (e) {
      e.preventDefault();

      that.$element.find('.contingency-container')
        .removeClass('active');
      $continueAction.removeClass('active');
      $(this).addClass('active');

      var currentContingency = $(this).attr('href');
      $body.addClass('status-continue');
      $body.removeClass('status-navigate');
      localStorage.setItem(storageKey, JSON.stringify({
        currentContingency: currentContingency
      }));
      $(currentContingency).addClass('active');
    });

    $navigateAction.on('click', function (e) {
      e.preventDefault();
      $continueAction.removeClass('active');
      $body.removeClass('status-continue');
      $body.addClass('status-navigate');
      localStorage.setItem(storageKey, JSON.stringify({}));
      $('.contingency-container').removeClass('active');
    });
  };

  Plugin.prototype.update = function () {
    var $body = $('body');
    if (this.options.active) {
      $body
        .addClass('contingency-active')
        .toggleClass('status-navigate', !this.options.currentContingency)
        .toggleClass('status-continue', !!this.options.currentContingency);

      if (this.options.currentContingency) {
        $(this.options.currentContingency).addClass('active');
        $('[href="' + this.options.currentContingency + '"]').addClass('active');
      }
    } else {
      $body.removeClass('contingency-active');
    }
  };

  Plugin.prototype.setOptions = function (options) {
    this.options = $.extend(this.options, options, this.$element.data(),
      JSON.parse(localStorage.getItem(storageKey))
    );
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
