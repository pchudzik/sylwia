'use strict';

angular.module('sylwia').directive('imageSlider', function() {
	return {
		scope: {
			imagesPromise: '='
		},
		link: function(scope, element) {
			var slider = element;
			slider.carousel();

			scope.nextSliderItem = function() {
				slider.carousel('next');
			};
			scope.prevSliderItem = function() {
				slider.carousel('prev');
			};
			scope.slideTo = function(index) {
				slider.carousel(index);
			};
			scope.imagesPromise.then(function(data) {
				scope.sliderItems = data.data;
			});
		},
		templateUrl: 'views/imageSlider.html'
	};
});