'use strict';

angular.module('sylwia').service('mainInfoService', function ($http) {
	return $http.get('resources/mainInfo.json');
});
