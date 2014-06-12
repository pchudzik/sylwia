'use strict';

angular.module('sylwia').controller('ContactCtrl', function ($scope, addressService, mapService) {
	addressService.success(function(data) {
		$scope.address = data.address;
		$scope.contact = data.contact;
	});

	mapService().then(function(drawMap) {
		drawMap('big-map');
	});
});
