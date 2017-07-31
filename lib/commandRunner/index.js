const GitHubApi = require('./mockGitHub');

class CommandRunner {
	constructor(github = GitHubApi) {
		this.github = github;
	}

	run(command) {
		this.github[command.subject][command.query](command.options);
	}
}

module.exports = CommandRunner;
