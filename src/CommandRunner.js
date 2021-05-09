const Github = require("./Github");

class CommandRunner {
  constructor(githubModule = new Github()) {
    this.github = githubModule;
  }

  async run(command) {
    const { username, subject } = command;
    let results;
    if (subject === "repos") {
      results = await this.github.repos(username);
    } else if (subject === "stars") {
      results = await this.github.stars(username);
    }
    return this.attachQueryResults(command, results);
  }

  attachQueryResults(command, results) {
    if (command.query === "details") {
      command.result = results.data;
    } else if (command.query === "count") {
      command.result = results.data.length;
    }
    return command;
  }
}

module.exports = CommandRunner;
