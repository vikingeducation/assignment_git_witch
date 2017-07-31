const GitHubApi = require('github');

class CommandRunner {
	constructor(github = GitHubApi) {
		this.github = new github();
	}

	run(command) {
		return new Promise(resolve => {
			let index = command.subject.indexOf(' ');
			console.log(command);
			if (index != -1) {
				command.subject = 'activity';
			}

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
