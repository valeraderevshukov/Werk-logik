$(document).ready(function() {
	if($('body').hasClass('main')) {
		var calcHeader = function() {
			var scrollTop = $(window).scrollTop();
			var navHeight = 115;
			if (scrollTop > 332 - navHeight) scrollTop = 332 - navHeight;
				$('.js-header').css('height', 332-scrollTop+'px');
				// $('.js-header-text').css('font-size', (2 - (2 / 100) * scrollTop)+'em');
				// $('.js-header-text').css('margin-top', (33 - (33 / 260) * scrollTop)+'px'); 
				$('.js-logo').css('margin-top', (40 - (33 / 280) * scrollTop)+'px');
				$('.js-logo').css('width', (233 - (233 / 540) * scrollTop)+'px');
		}
		calcHeader();
	};
	var calcText = function() {
		var scrollTop = $(window).scrollTop();
		if (scrollTop > 20 ){
			$('.js-header-text').addClass("js-none");
		}
		else{
			$('.js-header-text').removeClass("js-none");
		}
	}
	calcText();
	$(window).bind('scroll', function() {
		calcHeader();
		calcText();
	});
	$(".specialization__btn").mouseenter(function(){
		var index = $(this).index();
		$('.specialization__btn-top').eq(index).trigger('mouseenter');
	});
	$('.specialization__btn-top').on('click', function() {
		var index = $(this).index();
		$(".specialization__btn").removeClass('cycle-pager-active');
		$(".specialization__btn").eq(index).addClass('cycle-pager-active');
	});
	$(".js-open-nav").click(function(){
		$(".js-nav").slideToggle();
		return false;
	});
});

