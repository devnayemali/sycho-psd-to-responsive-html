(function ($) {
"use strict";

// Pre Loader Js 
$(window).on('load',function() {
	$("#loading").fadeOut(500);
});

// Side Bar Menu Js
$(".info-toggle-btn").on("click", function () {
	$(".mobile-sidebar").addClass("info-opened");
	$(".body-overlay").addClass("opened");
});

$(".sidebar-close-btn").on("click", function () {
	$(".mobile-sidebar").removeClass("info-opened");
	$(".body-overlay").removeClass("opened");
});

$(".body-overlay").on("click", function () {
	$(".mobile-sidebar").removeClass("info-opened");
	$(".body-overlay").removeClass("opened");
});

// Sidebar Mobile Menu
$('#mobile-menu-active').metisMenu();
$('#mobile-menu-active .has-dropdown > a').on('click', function (e) {
	e.preventDefault();
});

// One Page Nav
var top_offset = $('.header-area').height() - 0;
$('.main-menu nav ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});


 // Data-Background Js
 $("[data-background").each(function () {
	$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
});


// Slider Active Here 

function mainSlider() {

	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});

	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: true,
		autoplaySpeed: 8000,
		dots: true,
		fade: true,
		arrows: false,
		responsive: [{
		breakpoint: 767,
		settings: {
			dots: false,
			arrows: false
		}
		}]
	});
	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
		var $this = $(this);
		var $animationDelay = $this.data('delay');
		var $animationType = 'animated ' + $this.data('animation');
		$this.css({
			'animation-delay': $animationDelay,
			'-webkit-animation-delay': $animationDelay
		});
		$this.addClass($animationType).one(animationEndEvents, function () {
			$this.removeClass($animationType);
		});
		});
	}
	}
	mainSlider();


// Case Slider Js Here 


$('.case-active').slick({
	   centerMode: true,
		centerPadding: '0px',
		dots: false,
		arrows: false,
		infinite: true,
		speed: 700,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay:false,
	responsive: [
	  {
		breakpoint: 991,
		settings: {
			slidesToShow: 2,
		  arrows: false,
		  centerMode: true,
		  centerPadding: '80px',
		}
	  },
	  {
		breakpoint: 700,
		settings: {
		  arrows: false,
		  centerMode: true,
		  centerPadding: '40px',
		  slidesToShow: 1
		}
	  }
	  ,
	  {
		breakpoint: 425,
		settings: {
		  arrows: false,
		  centerMode: false,
		  slidesToShow: 1
		}
	  }
	]
  });

  
// Client Slider Js 

$('.client-active').slick({
	dots: false,
	infinite: false,
	arrows:false,
	speed: 300,
	slidesToShow: 5,
	slidesToScroll: 2,
	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  infinite: true,
		  dots: false,

		}
	  },
	  {
		breakpoint: 600,
		settings: {
			arrows:false,
			dots:false,
		  slidesToShow: 2,
		  slidesToScroll: 2
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows:false,
			dots:false,
		}
	  }
	  // You can unslick at a given breakpoint now by adding:
	  // settings: "unslick"
	  // instead of a settings object
	]
  });

  $('.testimonial_slider').owlCarousel({
	loop:true,
	margin:30,
	autoplay:false,
	autoplayTimeout:3000,
	smartSpeed:500,
	items:3,
	navText:['<button><i class="fa-solid fa-arrow-left-long"></i></button>','<button><i class="fa-solid fa-arrow-right-long"></i></button>'],
	nav:true,
	dots:false,
	responsive:{
		0:{
			items:1
		},
		767:{
			items:1
		},
		992:{
			items:2
		},
		1200:{
			items:3
		}
	}
});

$('.price-slider').owlCarousel({
	loop:true,
	margin:30,
	autoplay:false,
	autoplayTimeout:3000,
	smartSpeed:500,
	items:5,
	nav:false,
	dots:false,
	responsive:{
		0:{
			items:2
		},
		767:{
			items:3
		},
		992:{
			items:3
		},
		1200:{
			items:5
		}
	}
});



$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});

$('.counter').counterUp({

	delay: 100,

	time: 1000

});

new WOW().init();

// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="fa-solid fa-arrow-turn-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});


})(jQuery);