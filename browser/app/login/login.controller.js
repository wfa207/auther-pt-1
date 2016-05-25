app.controller('loginCtrl', function($scope, $http, AuthFactory) {
	// var email = $scope.email;
	// var password = $scope.password;
	$scope.login = AuthFactory.login;
	$scope.logout = AuthFactory.logout;
	$scope.getCurrentUser = AuthFactory.getCurrentUser;

})