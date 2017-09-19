class GitWitch {
  constructor(modules) {
    this.parser = modules.parser;
    this.runner = modules.runner;
    this.formatter = modules.formatter;
  }

  process(str) {
    // Process the command from the user.
    return new Promise(resolve => {
      let command = this.parser.parse(str);
      let response = this.runner.run(command);
      let results = this.formatter.format(response);
      resolve(results);
    });
  }
}

module.exports = GitWitch;
