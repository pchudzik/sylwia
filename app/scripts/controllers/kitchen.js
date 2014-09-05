'use strict';

angular.module('sylwia').controller('KitchenCtrl', function ($scope, $http) {
	$scope.imagesPromise = $http.get('resources/kitchenSlider.json');
});
