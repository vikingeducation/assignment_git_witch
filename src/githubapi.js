const ghtoken = require("./apikey");
var GithubApi = require("github");
var github = new GithubApi();

class GithubApiModule {
	constructor() {
		github.authenticate({
			type: "token",
			token: ghtoken
		});
	}

	async repos(username) {
		return github.repos.getForUser({ username });
	}

	async stars(username) {
		return github.activity.getStarredReposForUser({ username });
	}
}

module.exports = GithubApiModule;
