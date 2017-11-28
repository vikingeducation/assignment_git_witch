class GitWitch {
  constructor(constructorObj) {
    (this.parser = constructorObj.parser),
      (this.runner = constructorObj.runner),
      (this.formatter = constructorObj.formatter);
  }

  process(input) {
    return new Promise((resolve, reject) => {
      this.command = this.parser.parse(input);
      this.response = this.runner.run(this.command);
      this.output = this.formatter.format(this.response);
      resolve(this.output);
    });
  }
}

module.exports = GitWitch;
