"use strict";
var App = {};

$(function() {
	App.init();
});

App = {
	init : function(){
		// this.slider();
		this.searchField();
		this.tabs();
		this.imgDesktop();
		this.imgToBaground();
		this.imgToBackgroundExpand();
		// this.sticky();
		this.search();
		this.tags();
		this.filters();
		// this.post-gallery();
		this.lightboxGallery();
		this.login();
		this.toolbar();
		// this.goTo();
		// this.postMenu();
	},
	goToMobile: function(){
		var pos = $('#article-content').offset().top - 64;
		var This = this;
		$('.goToMobile').each(function(index, el) {
			var anchor = $(el).attr('href');
			$(el).on('click', function(e){
				e.preventDefault();

				

				$('.goToMobile').removeClass('link--text-dark');
				$(this).addClass('link--text-dark');
				$('.post-section').removeClass('active');
				$(anchor).addClass('active');
				$('html, body').animate({
					scrollTop: pos
				}, 500, function(){
					This.stepsInit();
				});
				
			});
		});
		$('.goToPrevNext').each(function(index, el) {
			var anchor = $(el).attr('href');
			// This.slider();
			$(el).on('click', function(e){
				e.preventDefault();
				$('.goToMobile').each(function(index, el) {
					var anchorMenu = $(el).attr('href');
					if ( anchorMenu == anchor){
						$('.goToMobile').removeClass('link--text-dark');
						$(this).addClass('link--text-dark');

						$('.post-section').removeClass('active');
						$(anchor).addClass('active');

						$('html, body').animate({
								scrollTop: pos
							}, 500, function(){
								This.stepsInit();
							});
					}
				});
			});
		});
	},
	goTo: function(){
		$('.goTo').each(function(index, el) {
			var anchor = $(el).attr('href');
			var pos = $(anchor).offset().top - 64;
			$(el).click(function() {
					$('html, body').animate({
							scrollTop: pos
					}, 500);
			});
		});
	},
	postMenu: function(){
		var This = this;
		$(window).on('scroll', function(){
			$('.post-section').each(function(index, el) {
				var $section = $(el);
				var id = "#" + $(el).attr('id');
				$(el).css('background','transparent');
				if( $('body').scrollTop() >= ($(el).offset().top - 64 ) ){
					// $(el).css('background','red');
					// console.log(el);
					$('#sidebar').find('.goTo').each(function(index, el) {
						
						if( $(el).attr('href') == id ){
							if(This.isDesktop()){
								$('.goTo').removeClass('link--text-dark');
								$(el).addClass('link--text-dark');
							}
						}
					});
				}
			});
		});
	},
	onResize : function(callback){
		$(window).on('resize', function(){
			callback();
		});
	},
	isDesktop : function(){
		return ($(window).width() >= 768)? true : false;
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

		// $input.on('keypress',function(){
		// 	if($input.val()){
		// 		$submit.hide();
		// 		$cancel.show();
		// 	}
		// });

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
	tags : function(){
		$('.ctag').each(function(index, elem){
			$(elem).on('click', function(e){
				e.preventDefault();
				$('.ctag').toggleClass('hide');
				$(this).toggleClass('active');
			});
		});
	},
	filters : function(){
		$('.filter').each(function(index, elem){
			$(elem).on('click', function(e){
				e.preventDefault();
				$(this).toggleClass('active');
			});
		});
	},
	search : function(){
		var $inputSearch = $('#input-search'),
				$search = $('#search'),
				$searchHero = $('#searchHero'),
				searchContent = $search.find('.search-form_content'),
				searchHeroContent = $searchHero.find('.search-form_content');
				
		$('.toggle-search').on('click', function(e){
			$('body').toggleClass('search-active');
			if($('body').hasClass('search-active')){
				$inputSearch.focus();
				if( $searchHero.length > 0 ){
					var posSearch = $(searchHeroContent).offset().top - $(searchContent).offset().top;
					$(searchHeroContent).css('margin-top',-(posSearch));
					setTimeout(function(){ $(searchHeroContent).css('margin-top',0); }, 700);
				}
			} else {
				var posSearchHero = $(searchHeroContent).offset().top - $(searchContent).offset().top;
				$(searchContent).css('margin-top',posSearchHero);	
				setTimeout(function(){ $(searchContent).css('margin-top',0); }, 700);
			}
		});

		$inputSearch.focusin(function() {
			$('.site-search_button-results').removeClass("fixed");
		});
		$inputSearch.focusout(function() {
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
				$("ul.tabs").find(".tab").removeClass("active");
				$(this).closest('.tab').addClass("active");
				$(".tab-content").removeClass("active");
				$(tab).addClass("active");
			});
		});
	},
	slider : function () {
		var This = this;
		this.stepsInit();
		if( this.isDesktop() ){
			This.stepsDestroy();
		}
		this.onResize(function(){
			if( This.isDesktop() ){
				This.stepsDestroy();
			}
			if( !This.isDesktop() ){
				This.stepsReinit();
			}
		});
	},
	lightboxGallery : function(){
		var active = -1;
		var galleryLength = $('.post-gallery_item').length;
		var galleryItems = [];
		$('.post-gallery').find('.post-gallery_item').each(function(index, elem){
			var pathImg = $(this).attr("href");
			var item = {
				index : index,
				url : pathImg
			};
			galleryItems.push(item);

			$(elem).attr('data-index', index);

			$(elem).on('click', function(e){
				e.preventDefault();
				active = index;
				var next = ( (active+1) == galleryLength )? 0 : active + 1;
				$('.lightbox-gallery_image').attr('src', pathImg);
				$('.lightbox-gallery_image-thumbnail').attr('src', galleryItems[next].url);
				$('.lightbox-gallery').addClass("active");
			});
		});

		$('.lightbox-gallery_link.next').on('click', function(e){
			e.preventDefault();
			if( active < (galleryLength -1)){
				var next = active + 1;
				var nextItem = ( (next+1) == galleryLength )? 0 : next + 1;
				active = next;
				$('.lightbox-gallery_image').attr('src', galleryItems[next].url);
				$('.lightbox-gallery_image-thumbnail').attr('src', galleryItems[nextItem].url);
			}
		});
		$('.lightbox-gallery_link.prev').on('click', function(e){
			e.preventDefault();
			if( active > 0){
				var prev = active -1;
				var nextItem = ( (prev+1) == galleryLength )? 0 : prev + 1;
				active = prev;
				$('.lightbox-gallery_image').attr('src', galleryItems[prev].url);
				$('.lightbox-gallery_image-thumbnail').attr('src', galleryItems[nextItem].url);
			}
		});
		$('.lightbox-gallery_image-next').on('click', function(e){
			e.preventDefault();
				var next = ( (active+1) == galleryLength )? 0 : active + 1;
				var nextItem = ( (next+1) == galleryLength )? 0 : next + 1;
				active = next;
				$('.lightbox-gallery_image').attr('src', galleryItems[next].url);
				$('.lightbox-gallery_image-thumbnail').attr('src', galleryItems[nextItem].url);
		});

		// Close
		$('.lightbox-gallery_close').on('click', function(e){
			e.preventDefault();
			$('.lightbox-gallery').removeClass("active");
		});
	},
	stepsInit : function(){
		$('.post_slider').slick({
			centerMode: true,
			centerPadding: '20px',
			arrows: false,
			dots: true,
			infinite: false,
			speed: 300,
			// slidesToShow: 1,
			slidesToShow: 1,
			adaptiveHeight: false,
		});
	},
	stepsReinit : function(){
		$('.post_slider').slick('reInit');
	},
	stepsDestroy : function(){
		$('.post_slider').slick('unslick');
	},

	sticky : function() {
		$("#sidebar").stick_in_parent({
			parent: ".section--medium",
			offset_top: 84
		})
		.on("sticky_kit:stick", function(e) {
			// console.log("has stuck!", e.target);
		})
		.on("sticky_kit:unstick", function(e) {
			// console.log("has unstuck!", e.target);
		});
	},
	login : function() {
		$('#loginBtn').on('click', function(){
			$('.login').toggleClass('active');
		});
	},
	toolbar : function() {
		var $toolbar = $('.toolbar'),
				$toggle = $('.toolbar-button--toggle'),
				$listen = $("#listen"),
				$toolbarPlayer = $(".toolbar-player"),
				$playPause = $('.toolbar-player_toggle');
		// Show / Hide - Mobile
		$toggle.on('click', function(e){
			$toolbar.toggleClass('active');
		});

		//Play simulation
		$listen.on('click', function(e){
			$(this).addClass('hide');
				$toolbarPlayer.removeClass('hide')
		});
		// Play / Pause
		$playPause.on('click', function(e){
			$toolbarPlayer.toggleClass('pause');
		});
	}
};

