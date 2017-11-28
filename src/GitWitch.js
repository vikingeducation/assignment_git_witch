class GitWitch {
  constructor(constructorObj) {
    this.parser = constructorObj.parser,
      this.runner = constructorObj.runner,
      this.formatter = constructorObj.formatter
  }


  process(input) {
    return new Promise((resolve, reject) => {
      this.command = parser.parse(input);
      this.reponse = runner.run(this.command);
      this.output = this.formatter.format(response);
      resolve(output);
    })
  }
}