class GitWitch {
  constructor(constructorObj) {
    (this.parser = constructorObj.parser),
      (this.runner = constructorObj.runner),
      (this.formatter = constructorObj.formatter);
  }

  process(input) {
    return new Promise((resolve, reject) => {
      this.command = this.parser.parse(input);
      this.runner.run(this.command).then(response => {
        this.output = this.formatter.format(response);
        console.log(this.output);
        resolve(this.output);
      });
    });
  }
}

module.exports = GitWitch;
