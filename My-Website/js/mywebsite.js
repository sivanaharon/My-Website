var mywebsiteApp = angular.module('mywebsiteApp', [
	'ngRoute','mywebsiteControllers']); 

mywebsiteApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/workExperience',{
		templateUrl: 'partials/workExperience.html',
		controller: 'ExperienceCtrl'}).
	when('/education', {
		templateUrl: 'partials/education.html',
		controller: 'EducationCtrl'}).
	when('/skills',{
		templateUrl: 'partials/skills.html',
		controller: 'SkillsCtrl'}).
	when('/contactMe',{ 
		templateUrl: 'partials/contactMe.html', 
		controller: 'ContactMeCtrl'}).
	otherwise({
		redirectTo:'/workExperience'
	});


}]);

