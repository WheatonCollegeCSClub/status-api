var request = require('request'),
	mongoose = require('mongoose'),
	Repo = mongoose.model('Repo');

exports.getAll = function(req, res){
	var options = {
		url: 'https://api.github.com/orgs/WheatonCollegeCSClub/repos',
		headers: {
			'User-Agent': 'WheatonCollegeCSClub'
		}
	};
	request(options, function(error, response, body) {
		if (!error && response.statusCode === 200) {
			res.json(JSON.parse(body));
		} else {
			res.send(response.statusCode, body);
		}
	});
};

exports.get = function(req, res) {
	var options = {
		url: 'https://api.github.com/repos/WheatonCollegeCSClub/' + req.params.repo,
		headers: {
			'User-Agent': 'WheatonCollegeCSClub'
		}
	};
	request(options, function(error, response, body) {
		if (!error && response.statusCode === 200) {
			res.json(JSON.parse(body));
		} else {
			res.send(response.statusCode, body);
		}
	});
}

// http://developer.github.com/v3/repos/#list-contributors
exports.getContributors = function(req, res) {
	var options = {
		url: 'https://api.github.com/repos/WheatonCollegeCSClub/' + req.params.repo + '/contributors',
		headers: {
			'User-Agent': 'WheatonCollegeCSClub'
		}
	};
	request(options, function(error, response, body) {
		if (!error && response.statusCode === 200) {
			res.json(JSON.parse(body));
		} else {
			res.send(response.statusCode, body);
		}
	});
}
