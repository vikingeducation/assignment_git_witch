const questionParser = require('question_parser.js');
const github = require('github.js');
const commandRunner = require('command_runner.js');
const CLI = require('cli.js');
const responseFormatter = require('response_formatter.js');

class GitWitch {
  constructor() {}
  parser(string) {
    return runner(command);
  }
  runner(command) {
    return formatter(response);
  }
  formatter(response) {
    return output;
  }
}

module.exports = GitWitch;
