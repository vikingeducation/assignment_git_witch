const QuestionParser = require('./QuestionParser');
const CommandRunner = require('./CommandRunner');
const ResponseFormatter = require('./ResponseFormatter');

class GitWitch {
  constructor() {
    this.parser = new QuestionParser();
    this.runner = new CommandRunner();
    this.formatter = new ResponseFormatter();
  }

  process(input) {
    return new Promise((resolve, reject) => {
      const command = this.parser.parse(input);
      this.runner.run(command).then(response => {
        const output = this.formatter.format(response);
        resolve(output);
      });
    });
  }
}

module.exports = GitWitch;
