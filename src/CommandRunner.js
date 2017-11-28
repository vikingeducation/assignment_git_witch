let gitWrapper = require('./githubAPI_wrapper.js');

class CommandRunner {
	constructor() {}
	run(obj) {
		obj.repos = gitWrapper.getStarredRepos().then(result => {
			return result.map(repo => {
				return { name: repo, desc: '' };
			});
		});
		return obj;
	}
}

module.exports = CommandRunner;
