var mywebsiteApp = angular.module('mywebsiteApp', [
	'ngRoute','mywebsiteControllers']); 

mywebsiteApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/workExperience',{
		templateUrl: 'workExperience.html',
		controller: 'ExperienceCtrl'}).
	otherwise({
		redirectTo:''
	});


}]);

