
$(document).ready(function(){
	
	//compare-slider-box
	if (!!$('.item-tile-compare').offset()) {
		$('.item-tile-compare .tile-slider').slick({
			dots: false,
			slidesToShow: 2,
			slidesToScroll: 1,
			touchThreshold: 100,
			variableWidth: false,
			infinite: false,
			adaptiveHeight: false,
			rows: 1,
			swipeToSlide: false,
			swipe: false,
			touchMove: false,
			autoplay: false,
			autoplaySpeed: 5000,
			prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev slider-button-small slider-button-small-prev"></span>',
			nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next slider-button-small slider-button-small-next"></span>',
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
					}
				},
			]
		});
		
	}
	if (!!$('.compare-slider-box').offset()) {
		$('.compare-slider-box .slider').each(function() {
			$(this).slick({
				dots: false,
				slidesToShow: 2,
				slidesToScroll: 1,
				touchThreshold: 100,
				variableWidth: false,
				infinite: false,
				adaptiveHeight: true,
				rows: 1,
				swipeToSlide: true,
				swipe: true,
				touchMove: true,
				autoplay: false,
				autoplaySpeed: 5000,
				prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev slider-button-main slider-button-main-prev"></span>',
				nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next slider-button-main slider-button-main-next"></span>',
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							dots: true,
							slidesToShow: 1,
							prevArrow: false,
							nextArrow: false,
						}
					},
				]
			});
		})
		
	}
	
});