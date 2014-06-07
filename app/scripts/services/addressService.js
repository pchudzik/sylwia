'use strict';

angular.module('sylwia').service('addressService', function ($http) {
	return $http.get('resources/address.json');
});
