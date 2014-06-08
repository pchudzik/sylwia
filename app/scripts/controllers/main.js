'use strict';

angular.module('sylwia').controller('MainCtrl', function ($scope, addressService, mainInfoService) {
	addressService.success(function(data) {
		$scope.contact = data.contact;
		$scope.address = data.address;
	});

	mainInfoService.success(function(data) {
		$scope.leftColumn = data.leftColumn;
		$scope.rightColumn = data.rightColumn;
	});
});
