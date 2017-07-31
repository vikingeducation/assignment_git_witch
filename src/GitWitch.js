class GitWitch {
  constructor(ops) {
    this.parser = ops.parser;
    this.runner = ops.runner;
    this.formatter = ops.formatter;
  }

  process(input) {
    return new Promise((resolve, reject) => {
      let command = this.parser.parse(input);
      let response = this.runner.run(command);
      let output = this.formatter.format(response);
      resolve(output);
    });
  }
}

module.exports = GitWitch;
