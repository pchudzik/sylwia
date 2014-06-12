'use strict';

angular.module('sylwia').service('aboutService', function ($http) {
	return $http.get('resources/about.html');
});
