const Github = require("./Github");

class CommandRunner {
	constructor(options) {
		this.runner = options.runner;
		this.gitHub = options.gitHub;
	}

	run(options) {
		let commandCombos = {
			"details-repos": this.gitHub.getRepos,
			"count-repos": this.gitHub.countRepos,
			"details-starred repos": this.gitHub.getStarred,
			"count-starred repos": this.gitHub.countStarred
		};

		return commandCombos[options.query + "-" + options.subject](
			options.username
		);
	}
}

module.exports = CommandRunner;
