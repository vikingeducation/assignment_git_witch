const GithubApiModule = require("./githubapi");
const api = new GithubApiModule();

//parsedObject:
//{ username: 'griselda', subject: 'repos', query: 'details' }

class CommandRunner {
	async run(parsedObject) {
		var { username, subject, query } = parsedObject;
		var apiData;
		if (subject == "repos") {
			apiData = await api.repos(username);
		} else {
			apiData = await api.stars(username);
		}
		return this.ammendObj(parsedObject, apiData);
	}

	ammendObj(parsedObject, apiData) {
		if (parsedObject.query == "details") {
			parsedObject.results = apiData.data;
		} else {
			parsedObject.results = apiData.data.length;
		}
		return parsedObject;
	}
}

module.exports = CommandRunner;
