var app = angular.module("myApp", []);
var mydata = jQuery.parseJSON(JSON.stringify(data));

app.controller('myCtrl', ['$scope', '$location', '$anchorScroll',
  function($scope, $location, $anchorScroll) {
		$scope.name = mydata.name;
	    $scope.jobDesc = mydata.jobDesc;
	    $scope.nav1 = mydata.nav1;
	    $scope.nav2 = mydata.nav2;
	    $scope.nav3 = mydata.nav3;
	    $scope.nav4 = mydata.nav4;
	
	    $scope.goTo = function(id) {
	      $location.hash(id);
	      $anchorScroll();
	    };
  }]);