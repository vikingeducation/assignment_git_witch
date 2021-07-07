const QuestionParser = require("./QuestionParser");
const CommandRunner = require("./CommandRunner");
const ResponseFormatter = require("./ResponseFormatter");

class GitWitch {
  constructor(
    defaultChoice = {
      parser: new QuestionParser(),
      runner: new CommandRunner(),
      formatter: new ResponseFormatter()
    }
  ) {
    this.parser = defaultChoice.parser;
    this.runner = defaultChoice.runner;
    this.formatter = defaultChoice.formatter;
  }

  async process(string) {
    let command = this.parser.parse(string);
    let response = await this.runner.run(command);
    return this.formatter.format(response);
  }
}

module.exports = GitWitch;
