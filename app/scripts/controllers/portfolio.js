'use strict';

angular.module('sylwia').controller('PortfolioCtrl', function ($scope, $routeParams, $location, projectsService, $http) {
	projectsService.getProjects.success(function(data) {
		$scope.intro = data.intro;
		$scope.projects = data.projects;

		var projectsByUrl = _.indexBy($scope.projects, 'url');

		if($routeParams.project) {
			var selectedProject = projectsByUrl[$routeParams.project];
			if(!selectedProject) {
				$location.url('/portfolio');
				$scope.$apply();
			} else {
				$scope.showProject(selectedProject);
			}
		}
	});

	$scope.showProject = function(project) {
		$scope.mainProject = project;
		projectsService.getProjectHtml(project.fullDescriptionHtml).success(function(data) {
			$scope.mainProjectHtml = data;
		});
		$('#single-project').modal('show');
		$('.carousel').carousel();
		console.log($('.carousel').html());
	};

	$scope.hideProject = function() {
		$scope.$apply($location.path($location.path().replace('/' + $routeParams.project, '')));
	};

	$('#single-project').on('hide.bs.modal', function() {
		$scope.hideProject();
	});

	var slider = $('#slider');
	slider.carousel();
	$scope.nextSliderItem = function() {
		slider.carousel('next');
	};

	$scope.prevSliderItem = function() {
		slider.carousel('prev');
	};

	$http.get('resources/portfolioSlider.json')
		.then(function(data) {
			$scope.sliderItems = data.data;
		}, function(error) {
			console.log(error);
		});
});
