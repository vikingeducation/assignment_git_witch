class CommandRunner {
  constructor(github) {
    this.github = github;
  }

  run(command) {
    if (command.subject === 'repos') {
      if (command.query === 'details') {
        return this.github.repos(command.username);
      } else {
        return this.github.
      }
  }
}

module.exports = CommandRunner;
