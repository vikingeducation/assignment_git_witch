const MockGitHubApi = require('./mockGitHub');

class CommandRunner {
	constructor(github = MockGitHubApi) {
		this.github = new github();
	}
	let subjects = {
		'whats': 'activity',
		'what': 'repos',
		'how many': 'repos'
	}

	run(command) {
		return new Promise(resolve => {
      let index = command.subject.indexOf(' ');
      if ( index != -1 ){
        command.subject = command.subject.slice(index + 1)
      }
			let results = this.github[subjects[command.subject]][command.query](
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
