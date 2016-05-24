app.factory('loginFactory', function ($http) {
	
	var loginFactory = {};
	
	var getData = function (res) {
		return res.data
	};

	loginFactory.logIn = function (email, password) {
		return $http.post('/login', {email: email, password: password})
	}
	
	return loginFactory

})