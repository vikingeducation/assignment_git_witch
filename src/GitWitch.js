const defaultParser = require('./QuestionParser')
const defaultRunner = require('./CommandRunner')
const defaultFormatter = require('./ResponseFormatter')

class GitWitch {

  constructor({parser, runner, formatter} = {}){
    this.parser = parser || new defaultParser();
    this.runner = runner || new defaultRunner();
    this.formatter = formatter || new defaultFormatter();
  }

  process(input) {
    return new Promise((resolve, reject) => {
      let command = this.parser.parse(input);
      this.runner.run(command)
        .then((response) => {
          let output = this.formatter.format(response)
          resolve(output);
        })
    })
  }
}

module.exports = GitWitch;
