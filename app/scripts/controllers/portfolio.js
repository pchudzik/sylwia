'use strict';

angular.module('sylwia').controller('PortfolioCtrl', function ($scope, $routeParams, $location, projectsService) {
	projectsService.getProjects.success(function(data) {
		$scope.intro = data.intro;
		$scope.projects = data.projects;

		
		if($routeParams.project) {
			$scope.showProject($scope.projects[0]);
		}
	});

	$scope.showProject = function(project) {
		$scope.mainProject = project;
		projectsService.getProjectHtml(project.fullDescriptionHtml).success(function(data) {
			$scope.mainProjectHtml = data;
		});
		$('#single-project').modal('show');
	};

	$scope.hideProject = function() {
		$scope.$apply($location.path($location.path().replace('/' + $routeParams.project, '')));
	};

	$('#single-project').on('hide.bs.modal', function() {
		$scope.hideProject();
	});
});
