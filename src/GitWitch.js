const parser = require('./QuestionParser');
const runner = require('./CommandRunner');
const formatter = require('./ResponseFormatter');

class GitWitch {
  constructor(inputObj = {}) {
    this.parser = inputObj.parser || parser;
    this.runner = inputObj.runner || runner;
    this.formatter = inputObj.formatter || formatter;
  }

  process(input) {
    return new Promise((resolve, reject) => {
      let parsedObj = this.parser.parse(input);

      this.runner.run(parsedObj).then(response => {
        resolve(this.formatter.format(response));
      });
    });
  }
}

module.exports = GitWitch;