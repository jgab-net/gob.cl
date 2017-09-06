"use strict";
var App = {};

$(function() {
	App.init();
});

App = {
	init : function(){
		this.slider();
		this.searchField();
		this.tabs();
		this.imgDesktop();
		this.imgToBaground();
		this.imgToBackgroundExpand();
		this.sticky();
		this.search();
	},
	onResize : function(callback){
		$(window).on('resize', function(){
			callback();
		});
	},
	isDesktop : function(){
		if($(window).width() >= 768){
			return true;
		}
		return false;
	},
	components : function(){
		$('.link, .button').each(function(index, el) {
			$(el).on( "click", function(e){
				e.preventDefault();
			});
		});
	},
	searchField : function(){
		var $input = $('.search-form_input'),
				$cancel = $('.search-form_button--cancel'),
				$submit = $('.search-form_button--submit');
		
		$cancel.hide();
		
		if( $input.val() ) {
			$submit.hide();			
			$cancel.show();
		}

		$input.on('keypress',function(){
			if($input.val()){
				$submit.hide();
				$cancel.show();
			}
		});

		$cancel.on('click',function(e){
			e.preventDefault();
			$input.val("");
			$submit.show();
			$cancel.hide();
		});
	},
	menu : function(){
		var $menuButtons = $( ".menu-trigger" ),
				$siteNav = $( ".site-nav" ),
				$body = $( "body" );
		$menuButtons.on( "click", function(){
			$siteNav.toggleClass( "active" );
			$body.toggleClass( "menu-open-mobile" );
    });
	},
	imgDesktop : function(){
		if(this.isDesktop()){
			$('.img-desktop').each(function(index, el) {
				var srcImg = $(el).data('src');
				$(el).attr('src', srcImg);
			});
		}
	},
	imgToBaground : function(){
		if(this.isDesktop()){
			$('.elem-bg').each(function(index, el) {
				var srcImg = $(el).find('.img-to-bg').attr('src');
				$(el).css('background-image','url('+ srcImg +')');
			});
		}
	},
	imgToBackgroundExpand : function(){
		var This = this;
		$('.background-image-expand').each(function(index, el) {
			var $bg = $(el).find('.background-image-expand_bg'),
					srcImg = String($(el).find('.img-to-bg').attr('src'));
			$bg.css({"background-image": "url("+ srcImg +")"});
			This.setElementWidth(el);
			This.onResize(function(){
				This.setElementWidth(el);
			});
		});
	},
	setElementWidth : function(el){
		var $bg = $(el).find('.background-image-expand_bg'),
				container = $('.container').outerWidth(),
				windowWidth = $(window).outerWidth(),
				expand = windowWidth-container,
				expandOneSide = expand/2,
				width = $(el).outerWidth(),
				widthBg = expand + width,
				widthBgOneSide = expandOneSide + width;

		$bg.css({'width': widthBgOneSide, 'margin-right':0, 'margin-left':0});
		if($(window).outerWidth() < 992){
			if($bg.hasClass('background-image-expand_bg--left'))
				$bg.css({'margin-right': -expandOneSide, 'width': widthBg});
			if($bg.hasClass('background-image-expand_bg--right'))
				$bg.css({'margin-left': -expandOneSide, 'width': widthBg});
		}
	},
	onResize : function(callback){
		$(window).on('resize', function(){
			callback();
		});
	},
	search : function(){
		$('.active-search').on('click', function(e){
			$('body').addClass('search-active');
			$('#input-search').focus();
		});

		$("#input-search").focusin(function() {
			$('.site-search_button-results').removeClass("fixed");
		});
		$("#input-search").focusout(function() {
			$('.site-search_button-results').addClass("fixed");
		});
	},
	scroller : function(){
		$(".nano").nanoScroller({
			alwaysVisible: true
		});
	},
	
	tabs : function() {
		$('ul.tabs').find(".tab").each(function(index, elem){
			$(elem).find('a').on('click', function(e){
				e.preventDefault();
				var tab = $(this).attr("href");
				$("ul.tabs").find("a").removeClass("active");
				$(this).addClass("active");
				$(".tab-content").removeClass("active");
				$(tab).addClass("active");
			});
		});
	},
	slider : function () {
		$('.post_slider').slick({
			centerMode: true,
			centerPadding: '20px',
			arrows: false,
		  dots: true,
			infinite: false,
			speed: 300,
			// slidesToShow: 1,
			slidesToShow: 1,
			adaptiveHeight: true,
			// responsive: [
			// 	{
			// 		breakpoint: 979,
			// 		settings: {
			// 			slidesToShow: 1,
			// 			slidesToScroll: 1,
			// 		}
			// 	},
			// 	{
			// 		breakpoint: 767,
			// 		settings: {
			// 			arrows: false,
			// 		}
			// 	},
			// ]
		});
	},
	sticky : function() {
		console.log("sticky");
		$("#sidebar").stick_in_parent({
			parent: ".section",
			offset_top: 84
		})
		.on("sticky_kit:stick", function(e) {
			console.log("has stuck!", e.target);
		})
		.on("sticky_kit:unstick", function(e) {
			console.log("has unstuck!", e.target);
		});
	}
};