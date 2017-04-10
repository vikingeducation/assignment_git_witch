class CommandRunner {
  constructor(github) {
    this.github = github;
  }

  run(command) {
    const { username, subject } = command;
    if (subject === 'repos') {
      return this.github.repos(username);
    } else if (subject === 'stars') {
      return this.github.stars(username);
    }
  }
}

module.exports = CommandRunner;
