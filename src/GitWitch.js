const questionParser = require("../src/QuestionParser");

class GitWitch {
  constructor({ parser, runner, formatter }) {
    this.parser = parser;
    this.runner = runner;
    this.formatter = formatter;
  }

  process(input) {
    let command = this.parser.parse(input);

    let rawResponse = this.runner.run(command);

    let formattedResponse = this.formatter.format(rawResponse);
  }
}

module.exports = GitWitch;
