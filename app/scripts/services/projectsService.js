'use strict';

angular.module('sylwia').service('projectsService', function ($http) {
	return {
		getProjects: $http.get('resources/projects.json'),
		getProjectHtml: function(url) {
			return $http.get(url);
		}
	};
});
