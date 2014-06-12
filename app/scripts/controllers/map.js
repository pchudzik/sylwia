'use strict';

angular.module('sylwia').controller('MapCtrl', function ($scope, $route, mapService) {
	mapService().then(function(drawFunction) {
		drawFunction('small-map');
	});
	$scope.activeTab = function() {
		return $route.current.activetab;
	};
});
