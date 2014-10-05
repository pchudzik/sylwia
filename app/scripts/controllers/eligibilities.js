'use strict';

angular.module('sylwia').controller('EligibilitiesCtrl', function ($scope, $http) {
	$http.get('resources/eligibilities.json').then(function(response) {
		$scope.images = response.data;
	});
});
