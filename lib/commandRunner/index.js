const MockGitHubApi = require('./mockGitHub');

class CommandRunner {
	constructor(github = MockGitHubApi) {
		this.github = new github();
	}

	run(command) {
		return new Promise(resolve => {
			let results = this.github[command.subject][command.query](
				command.options
			);
			resolve({
				command: command,
				results: results
			});
		});
	}
}

module.exports = CommandRunner;
