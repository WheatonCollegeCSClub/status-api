module.exports = function(app){

	//home route
	var repos = require('../app/controllers/repos');
	app.get('/repos', repos.getAll);
	app.get('/repos/:repo', repos.get);
	app.get('/repos/:repo/contributors', repos.getContributors);
};
