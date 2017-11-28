const questionParser = require('./question_parser.js');
const github = require('./github.js');
const commandRunner = require('./command_runner.js');
const CLI = require('./cli.js');
const responseFormatter = require('./response_formatter.js');

class GitWitch {
  constructor(obj) {
    this.parser = obj.parser;
    this.runner = obj.runner;
    this.formatter = obj.formatter;
  }

  process(input) {
    let start = input => {
      return new Promise((resolve, reject) => {
        return resolve(this.parser.parse(input));
      });
    };
    return start(input)
      .then(command => this.runner.run(command))
      .then(response => this.formatter.format(response))
      .catch(err => console.log(err));
  }
}

module.exports = GitWitch;
