app.controller('signUpCtrl', function($scope, $http, signupFactory) {
	$scope.newUser = function (email, password) {
		console.log(email, password)
		return signupFactory.newUser(email, password)
		.then(function (newUser) {
			return newUser
		})
	}

})