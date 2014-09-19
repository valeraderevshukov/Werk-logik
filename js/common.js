$(document).ready(function() {
	if($('body').hasClass('main')) {
		var calcHeader = function() {
			var scrollTop = $(window).scrollTop();
			var navHeight = 143;
			if (scrollTop > 332 - navHeight) scrollTop = 332 - navHeight;
				$('.js-header').css('height', 332-scrollTop+'px');
				$('.js-header-text').css('font-size', (2 - (2 / 360) * scrollTop)+'em');
				$('.js-header-text').css('margin-top', (33 - (33 / 260) * scrollTop)+'px');
				$('.js-logo').css('margin-top', (40 - (33 / 240) * scrollTop)+'px');
				$('.js-logo').css('width', (233 - (233 / 466) * scrollTop)+'px');
			 
		}
		calcHeader();
		$(window).bind('scroll', function() {
			calcHeader();
		});
	}
});

