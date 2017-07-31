class GitWitch {
  constructor(modules) {
    this.parser = modules.parser;
    this.runner = modules.runner;
    this.formatter = modules.formatter;
  }
}

module.exports = GitWitch;
