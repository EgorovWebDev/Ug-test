$('.dropdown').slideToggle(); 

$(document).ready(function(){
	// Init Proud Slider
  $('.proud-slider').slick({
		arrows: false,
		dots: true,
  });
	;
	//  Init News Slise
	$('.news-slider').slick({
		arrows: false,
		dots: true,
  });

	if($(window).width() < 577) {
		$('.direction-slider').slick({
			arrows: false,
			dots: true
		});
	};
	// Mobile dropwosn
	$('.mobile-dropdown').click(function() {
		$('.mobile-dropdown__list').toggleClass("visible");
	});
	// Dropdown Menu 
	$(function() { 
		$('.dropdown-toggle').click(function(){ 
			$(this).next('.dropdown').slideToggle();
		});
		
		$(document).click(function(e) 
			{ 
			let target = e.target; 
			if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) { 
					$('.dropdown').slideUp(); 
			}
			
			});

	});

	$('.apple-switch').change(function() {
		if ($('.apple-switch').is(':checked')) {
			$('.switch-label').css('display', 'block');
		}
		else {
			$('.switch-label').css('display', 'none');
		}
	});


	(function () {
		$('.hamburger-wrapper').on('click', function() {
			$('.hamburger-menu').toggleClass('animate');
			$('.mobile-menu-overlay').toggleClass('visible');
		})
		$('.mobile-menu-overlay > ul > li > a').on('click', function () {
			$('.hamburger-menu').removeClass('animate');
			$('.mobile-menu-overlay').removeClass('visible');
		})
	})();

});

