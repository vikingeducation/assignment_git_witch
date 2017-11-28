// let Parser = require('./QuestionParser');
// let parser = new Parser();

class GitWitch {
	constructor(obj) {
		this.parser = obj.parser;
		this.runner = obj.runner;
		this.formatter = obj.formatter;
	}
  process(str) {
    const parsed = this.parser.parse(str);
    return this.runner.run(parsed)
      .then(result => this.formatter.format(result));
  }
}

module.exports = GitWitch;
