class GitWitch {
  constructor(dependencies) {
    this.parser = dependencies.parser;
    this.runner = dependencies.runner;
    this.formatter = dependencies.formatter;
  }

  process(input){
    return new Promise((resolve, reject) => {
        let command = this.parser.parse(input);
        let response = this.runner.run(command);
        response.then((value) => {
          let output = this.formatter.format(value);
          resolve(output);
        });
    });

  }
}

module.exports = GitWitch;