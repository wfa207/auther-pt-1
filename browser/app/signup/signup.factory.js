app.factory('signupFactory', function ($http) {
	
	var signupFactory = {};
	
	var getData = function (res) {
		return res.data
	};

	signupFactory.newUser = function (email, password) {
		console.log('hello')
		console.log(email, password)
		return $http.post('/api/users', {email: email, password: password})
		.then(function (res) {
			return res;
		})
	}
	
	return signupFactory

})