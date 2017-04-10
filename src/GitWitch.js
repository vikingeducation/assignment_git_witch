class GitWitch {
  constructor({ parser, runner, formatter }) {
    this.parser = parser;
    this.runner = runner;
    this.formatter = formatter;
  }

  async process(string) {
    let command = this.parser.parse(string);
    let response = await this.runner.run(command);
    return this.formatter.format(response);
  }
}

module.exports = GitWitch;
