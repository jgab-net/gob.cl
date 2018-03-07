/**
 * JQuery Plugin (Toolbar a11Y).
 * Handle A- A+
 *
 * jQuery lightweight plugin boilerplate from: @addyosmani
 *
 * Singleton widget.
 */
(function ($, window, document, undefined) {
  'use strict';

  var pluginName = 'toolbar';
  var pluginDataKey = 'gl.toolbar';

  var changeEvent = 'change.gl.toolbar';

  var storageKey = 'gob.cl:toolbar';

  var Plugin = (function () {

    var instance;

    var defaults = {
      value: '16px',
      index: 0,
      values: ['16px', '20px', '24px'],
      classes: ['a11y-font-0', 'a11y-font-1', 'a11y-font-2'],
      contrast: 'a11y-contrast'
    };
    function Plugin(element, options) {
      this.$element = $(element);

      this.options = $.extend({}, defaults, options, {
        values: this.$element.data('values'),
        value: this.$element.data('value'),
        index: (this.$element.data('values') || []).indexOf(this.$element.data('value'))
      });

      this.init();
    }

    Plugin.prototype.init = function () {
      var that = this;

      this.options.index = this._getIndex(); // get index from the current value.
      this._update(); // and update UI.

      var $html = $('html');
      var $prev = $('.toolbar-button--less'); // Use this.$element.find for non global behavior
      var $next = $('.toolbar-button--plus'); // Use this.$element.find for non global behavior
      var $contrast = $('.toolbar-button--contrast'); // Use this.$element.find for non global behavior

      var $toolbar = $('.toolbar'); // Use this.$element for non global behavior
      // var $toolbarPlayer = $(".toolbar-player"); // Use this.$element.find for non global behavior
      var $toggle = $('.toolbar-button--toggle'); // Use this.$element.find for non global behavior
      // var $listen = $('.toolbar-button--listen'); // Use this.$element.find for non global behavior
      // var $playPause = $('.toolbar-player_toggle'); // Use this.$element.find for non global behavior

      var stored = !!localStorage.getItem(storageKey);

      $html.toggleClass(that.options.contrast, stored);

      $contrast.on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $html.toggleClass(that.options.contrast);
        if ($html.hasClass(that.options.contrast)) {
          localStorage.setItem(storageKey, true);
        } else {
          localStorage.removeItem(storageKey);
        }
      });

      // show / hide - mobile
      $toggle.on('click', function (e) {
        e.preventDefault();
        $toolbar.toggleClass('active');
      });

      //play simulation
      /*$listen.on('click', function (e) {
        e.preventDefault();
        $(this).addClass('invisible');
        $toolbarPlayer.removeClass('invisible')
      });
      // play / pause
      $playPause.on('click', function (e) {
        e.preventDefault();
        $toolbarPlayer.toggleClass('pause');
      });*/

      $prev.on('click', function (e) {
        e.preventDefault();
        if (!$prev.hasClass('disabled') && that.options.index > 0) {
          that.options.index = that._getIndex() - 1;
          that.options.value = that.options.values[that.options.index];

          that._update();
          that.$element.trigger(changeEvent, that.options.value);
        }
      });

      $next.on('click', function (e) {
        e.preventDefault();
        if (!$next.hasClass('disabled') && that.options.index < that.options.values.length) {
          that.options.index = that._getIndex() + 1;
          that.options.value = that.options.values[that.options.index];

          that._update();
          that.$element.trigger(changeEvent, that.options.value);
        }
      });
    };

    Plugin.prototype._getIndex = function () {
      return (this.options.values || []).indexOf(this.options.value);
    };

    Plugin.prototype._update = function () {
      $('html')
        .css({
          fontSize: this.options.value
        })
        .removeClass(this.options.classes.join(' '))
        .addClass(this.options.classes[this.options.index]);

      var $prev = $('.toolbar-button--less'); // Use this.$element.find for non global behavior
      var $next = $('.toolbar-button--plus'); // Use this.$element.find for non global behavior

      $prev.removeClass('disabled');
      $next.removeClass('disabled');

      if (this.options.index === 0) {
        $prev.addClass('disabled');
      }

      if (this.options.index === this.options.values.length - 1) {
        $next.addClass('disabled');
      }
    };

    Plugin.prototype.setOptions = function (options) {
      this.options = $.extend(this.options, options);
    };

    return {
      getInstance: function (element, options) {
        if (!instance) {
          instance = new Plugin(element, options);
        }
        return instance;
      }
    }
  })();

  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, pluginDataKey)) {
        $.data(this, pluginDataKey, Plugin.getInstance(this, options));
      } else {
        $.data(this, pluginDataKey).setOptions(options);
      }
    });
  };

  if (! window.rsConf) {
    window.rsConf = {
      general: {
        usePost: true
      }
    };
  }
  if (! window.rsConf.ui) { window.rsConf.ui = {}; }
  window.rsConf.ui.rsbtnClass = 'rsbtn-gobcl-skin';
  window.rsConf.ui.player = [
    '<span class="rsbtn_box">',
    '	<a href="javascript:void(0);" class="rsbtn_pause rsimg rspart rsbutton">',
    '		<span class="toolbar-button_content">',
    '     <i class="ic-pause"></i>',
    '     <i class="ic-play"></i>',
    '   </span> ',
    '	</a>',
    '	<span class="rsbtn_progress_container rspart">',
    '		<span class="rsbtn_progress_played"></span>',
    '	</span>',
    '	<a href="javascript:void(0);" class="rsbtn_dl rsimg rspart rsbutton">',
    '		<span class="toolbar-button_content">',
    '     <i class="ic-download"></i>',
    '   </span> ',
    '	</a>',
    '	<a href="javascript:void(0);" class="rsbtn_closer rsimg rspart rsbutton">',
    '		<span class="toolbar-button_content">',
    '     <i class="ic-close"></i>',
    '   </span> ',
    '	</a>',
    '	<span class="rsdefloat"></span>',
    '</span>'
  ];

})(jQuery, window, document);
