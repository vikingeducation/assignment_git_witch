class QuestionParser {
	parse(inputArgv) {
		var query = inputArgv.slice(0, 4) == "what" ? "details" : "count";
		var subject = /star/i.test(inputArgv) ? "starred repos" : "repos";
		var username = inputArgv
			.match(/(?=does.*?(\w+))/i)
			.join("")
			.toString();

		return { username, subject, query };
	}
}

module.exports = QuestionParser;
