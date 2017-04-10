const QuestionParser = require("./QuestionParser");
const CommandRunner = require("./CommandRunner");
const ResponseFormatter = require("./ResponseFormatter");

class GitWitch {
  constructor({ parser, runner, formatter }) {
    this.parser = parser;
    this.runner = runner;
    this.formatter = formatter;
  }

  process(string) {
    let command = this.parser.parse(string);
    this.runner.run(command).then(response => {
      this.formatter.format(response);
    });
    return new Promise((resolve, reject) => {
      return resolve(response);
    });
  }
}

module.exports = GitWitch;
