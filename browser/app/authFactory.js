app.factory('AuthFactory', function($http) {
	
	function getData(res) {
		return res.data;
	}

	return {

		currentUser: null,
		isAdmin: null,

		getCurrentUser: function() {
			return $http.get('/auth/me')
			.then(getData)
			.then(function(session) {
				this.currentUser = session.user;
				console.log(this.currentUser);
				return this.currentUser;
			});
		},

		login: function (email, password) {
			return $http.post('/login', { email: email, password: password });
		},

		logout: function() {
			$http.post('/logout');
		},

		newUser: function (email, password) {
			return $http.post('/api/users', {email: email, password: password})
			.then(function (res) {
				return;
			});
		}

	}

});