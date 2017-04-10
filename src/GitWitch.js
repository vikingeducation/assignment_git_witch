const defaultParser = require('./QuestionParser')
// const runner = require('./CommandRunner')
// const parser = require('./ResponseFormatter')

class GitWitch {

  constructor({parser, runner, formatter} = {}){
    this.parser = parser || defaultParser;
    this.runner = runner;
    this.formatter = formatter;
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
