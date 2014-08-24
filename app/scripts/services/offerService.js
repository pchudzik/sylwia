'use strict';

angular.module('sylwia').service('offerService', function ($http) {
	return $http.get('resources/offer.html');
});
