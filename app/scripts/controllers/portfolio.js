'use strict';

angular.module('sylwia').controller('PortfolioCtrl', function ($scope, $routeParams, projectsService) {
	projectsService.getProjects.success(function(data) {
		$scope.intro = data.intro;
		$scope.projects = data.projects;

		
		if($routeParams.project) {
			console.log('show project' + $routeParams.project);
			$scope.showProject($scope.projects[0]);
		}
	});

	$scope.showProject = function(project) {
		$scope.mainProject = project;
		$('#single-project').modal('show');
	};

	$scope.hideProject = function() {
		$scope.mainProject = null;
		$('#single-project').modal('hide');
	};
});
