let Github = require('github');
let github = new Github();
let env = require('dotenv').config();

let gitWrapper = {};

github.authenticate({
	type: 'token',
	token: process.env.GITHUB_API_TOKEN
});

gitWrapper.getCommits = (user, repo) => {
	return github.repos.getCommits({
		owner: user,
		repo: repo,
		sha: 'master'
	});
};

gitWrapper.getRepos = user => {
	return new Promise((resolve, reject) => {
		github.repos
			.getAll({})
			.then(result => {
				console.log('this is the result: ' + JSON.stringify(result, null, 2));
				resolve(result);
			})
			.catch(err => {
				console.log('this is the err: ' + err);
				reject(err);
			});
	});
};

gitWrapper.getRepos('johnrpb');

module.exports = gitWrapper;
