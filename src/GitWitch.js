// let Parser = require('./QuestionParser');
// let parser = new Parser();

class GitWitch {
	constructor(obj) {
		this.parser = obj.parser;
		this.runner = obj.runner;
		this.formatter = obj.formatter;
	}
	process(input) {
		let parsedInput = this.parser.parse(input);
		let nextInput = this.runner.run(parsedInput);
		let final = this.formatter.format(nextInput);
		return Promise.resolve(final);
	}
}

module.exports = GitWitch;
