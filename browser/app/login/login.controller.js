app.controller('loginCtrl', function($scope, $http, loginFactory) {
	// var email = $scope.email;
	// var password = $scope.password;
	$scope.logIn = function (email, password) {
		return loginFactory.logIn(email, password)
	}

})