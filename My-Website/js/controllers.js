var mywebsiteControllers = angular.module('mywebsiteControllers', []); 

mywebsiteControllers.controller('MainCtrl',['$scope','$location',
	function($scope,$location){ 
		$scope.go = function (path){ 
		$location.path(path); 
};
}]); 

mywebsiteControllers.controller('ExperienceCtrl',['$scope', '$http', 
	function($scope,$http){
		$http.get('json/workexperience.json').success(function(data){
			$scope.workexperience = data; 
		}); 
	
	}
	]); 

mywebsiteControllers.controller('EducationCtrl',['$scope']); 
mywebsiteControllers.controller('SkillsCtrl',['$scope']); 
mywebsiteControllers.controller('ContactMeCtrl',['$scope']); 