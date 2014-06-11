'use strict';

angular.module('sylwia').controller('MenuCtrl', function ($scope, $route) {
	$scope.activeTab = function() {
		return $route.current.activetab;
	};
});
