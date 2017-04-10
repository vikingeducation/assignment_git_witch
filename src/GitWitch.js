// const questionParser = require("../src/QuestionParser");

class GitWitch {
  constructor({ parser, runner, formatter }) {
    this.parser = parser;
    this.runner = runner;
    this.formatter = formatter;
  }

  process(input) {
    return new Promise( (resolve, reject) => {
      let command = this.parser.parse(input);

      this.runner.run(command).then((rawResponse) => {
        resolve(this.formatter.format(rawResponse));
      });
    });

  }
}

module.exports = GitWitch;
