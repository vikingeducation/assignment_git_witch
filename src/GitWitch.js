class GitWitch {
  constructor(options) {
    this.parser = options.parser;
    this.runner = options.runner;
    this.formatter = options.formatter;
  }

  process(string) {
    return new Promise((resolve, reject) => {
      var parsed = this.parser.parse(string);
      this.runner.run(parsed).then(response => {
        resolve(this.formatter.format(response));
      });
    });
  }
}

module.exports = GitWitch;
