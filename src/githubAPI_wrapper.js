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
				console.log('this is the result: ' + result.data[0]);
				resolve(result.data[0]);
			})
			.catch(err => {
				console.log('this is the err: ' + err);
				reject(err);
			});
	});
};

gitWrapper.getStarredRepos = user => {
	return new Promise((resolve, reject) => {
		github.activity
			.getStarredRepos({})
			.then(result => {
				let finalResult = result.data.map(repoObj => repoObj.repo.name);
				console.log('These are the starred repos: ' + finalResult);
				resolve(finalResult);
			})
			.catch(err => {
				console.log('this is the error: ' + err);
				reject(err);
			});
	});
};

gitWrapper.getStarredRepos('fabpot');

//gitWrapper.getRepos('johnrpb');

module.exports = gitWrapper;
