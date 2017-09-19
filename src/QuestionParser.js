class QuestionParser {
	parse(input) {
		input = input.split(" ");

		let obj = {};

		if (input[0] === "what") {
			obj.query = "details";
			input = input.slice(1);
		} else {
			obj.query = "count";
			input = input.slice(2);
		}

		if (input[0] === "starred") {
			obj.subject = "starred repos";
			input = input.slice(3);
		} else {
			obj.subject = "repos";
			input = input.slice(2);
		}

		obj.username = input[0];

		return obj;
	}
}

module.exports = QuestionParser;
