class ResponseFormatter {
	async format(fullData) {
		var returnStr;
		//console.log("FULLDATA", fullData);

		if (fullData.query == "details" && fullData.subject !== "starred repos") {
			returnStr = scrubRepoDetails(fullData);
		} else if (
			fullData.query == "details" &&
			fullData.subject == "starred repos"
		) {
			returnStr = scrubStarredRepos(fullData);
		} else {
			returnStr = scrubRepoCount(fullData);
		}

		return returnStr;
	}
} //end class

function scrubRepoDetails(fullData) {
	var scrubbedData = fullData.results.map(function(data, i) {
		return `
${i++}. ${data.name}: ${data.description}
`;
	});
	return scrubbedData.join("").trim("");
}

function scrubStarredRepos(fullData) {
	var scrubbedData = fullData.results.map(function(data, i) {
		//return JSON.stringify(data, null, 2);
		return `
${i++}. ${data.repo.name}: ${data.repo.description}
`;
	});
	return scrubbedData.join("").trim("");
}

function scrubRepoCount(fullData) {
	return `
${fullData.username} has ${fullData.results} ${fullData.subject}
  `;
}

module.exports = ResponseFormatter;
