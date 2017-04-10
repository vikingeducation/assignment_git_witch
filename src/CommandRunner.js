class CommandRunner {
  constructor(githubObj) {
    this.githubObj = githubObj;
    // dependency injection
  }

  run(commandObj) {
    this.commandObj["repos"] = githubObj;
    return this.commandObj;
  }
}

module.exports = CommandRunner;
