app.controller('signUpCtrl', function($scope, $http, AuthFactory) {
	
	$scope.newUser = function (email, password) {
		console.log(email, password)
		return AuthFactory.newUser(email, password)
		.then(function (newUser) {
			return newUser
		})
	}

})