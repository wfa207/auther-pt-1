'use strict'; 

var app = require('express')();
var path = require('path');
var session = require('express-session');
var User = require('../api/users/user.model')

app.use(session({
	// the following ensures that session IDs are not predictable
	secret: 'tongiscool', // WHAT DOES THIS DO???
	cookie: {maxAge: 1000 * 60 * 15}
}));

app.use(function(req, res, next) {
	console.log('session: ', req.session);
	next();
});

// Why do we not call 'next()' in the routes below?
app.use(require('./logging.middleware'));

app.use(require('./request-state.middleware'));

app.use(require('./statics.middleware'));

app.use('/api', require('../api/api.router'));

app.post('/login', function(req, res, next) {
	User.findOne({
		where: req.body
	})
	.then(function(user) {
		if (!user) {
			res.sendStatus(401);
		} else {
			req.session.user = {};
			req.session.user.id = user.id;
			req.session.user.isAdmin = user.isAdmin;
			console.log(req.session.user);
			res.status(200).send(user);
		}
	})
	.catch(next);
});

app.post('/logout', function(req, res, next) {
	req.session.user.id = null;
	req.session.user.isAdmin = null;
	console.log(req.session);
	res.sendStatus(200);
});

app.get('/auth/me', function(req, res, next) {
	res.json(req.session);
});

var validFrontendRoutes = ['/', '/stories', '/users', '/stories/:id', '/users/:id', '/signup', '/login'];
var indexPath = path.join(__dirname, '..', '..', 'public', 'index.html');
validFrontendRoutes.forEach(function (stateRoute) {
  app.get(stateRoute, function (req, res) {
    res.sendFile(indexPath);
  });
});

app.use(require('./error.middleware'));

module.exports = app;
