'use strict';

angular.module('sylwia').controller('AboutCtrl', function ($scope, aboutService) {
	aboutService.success(function(data) {
		$scope.aboutHtml = data;
	})
});
