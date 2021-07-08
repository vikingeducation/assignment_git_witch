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
      response.then(output => {
        resolve(this.formatter.format(output));
      });
      // console.log(
      //   `Command: ${command}, Response: ${response}, Output: ${output}`
      // );
    });
  }
}

module.exports = GitWitch;
