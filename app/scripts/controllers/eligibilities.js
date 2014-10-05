'use strict';

angular.module('sylwia').controller('EligibilitiesCtrl', function ($scope, $http) {
	$http.get('resources/eligibilities.json').then(function(response) {
		$scope.images = response.data;
	})
	//fixed order. + resize on hover x2
	// $scope.images = [2,5,1,3,4];
});
