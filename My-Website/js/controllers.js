var mywebsiteControllers = angular.module('mywebsiteControllers', []); 

mywebsiteControllers.controller('MainCtrl',['$scope','$location',
	function($scope,$location){ 
		$scope.go = function (path){ 
		$location.path(path); 
};
}]); 

mywebsiteControllers.controller('ExperienceCtrl',['$scope'
	]); 
document.getElementById("header").innerHTML='update'; 