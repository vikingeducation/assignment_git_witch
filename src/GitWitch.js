const questionParser = require('./question_parser.js');
const github = require('./github.js');
const commandRunner = require('./command_runner.js');
const CLI = require('./cli.js');
const responseFormatter = require('./response_formatter.js');

class GitWitch {
  constructor(parser, runner, formatter) {
    this.parser = {
      parse(string) {
        return questionParser.parser(command);
      }
    };
    this.runner = {
      run(command) {
        return commandRunner.runner(response);
      }
    };
    this.formatter = {
      format(response) {
        return responseFormatter.formatter;
      }
    };
  }

  process(input) {
    let start = input => {
      return new Promise((resolve, reject) => {
        resolve(this.parser.parse(input));
      });
    };
    return start(input)
      .then(command => this.runner.run(command))
      .then(response => this.formatter.format(response))
      .catch(console.log('Error!'));
  }
}

module.exports = GitWitch;
