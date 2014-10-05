'use strict';

angular.module('sylwia').controller('OfferCtrl', function ($scope, $http) {
	$http.get('resources/offerImages.json').then(function(response) {
		$scope.offerImages = response.data;
	});
});
