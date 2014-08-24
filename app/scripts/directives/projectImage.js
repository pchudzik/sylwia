'use strict';

angular.module('sylwia').directive('projectImage', function() {
	return {
		scope: {
			image: '=',
			url: '=',
			position: '@'
		},
		link: function(scope) {
			scope.show = scope.image.position === scope.position;
		},
		templateUrl: 'views/projectImageDirective.html'
	};
});