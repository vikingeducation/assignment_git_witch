const CommandRunner = require('../lib/commandRunner');
const Command = require('../lib/commandRunner/command');
const MockGitHubApi = require('../lib/commandRunner/mockGitHub');

describe('Command Runner', () => {
	beforeEach(() => {
		this.commandRunner = new CommandRunner(MockGitHubApi);
	});

	it('it runs a command', () => {
		let command = Command['what'];
		command.subject = 'repos';
		command.username = 'griselda';

		this.commandRunner.run(command).then(resultsObj => {
			expect(resultsObj.results.length).toEqual(6);
		});
	});
});
