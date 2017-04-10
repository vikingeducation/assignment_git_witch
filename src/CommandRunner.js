class CommandRunner {
  constructor(github) {
    this.github = github;
  }

  async run(command) {
    const { username, subject, query } = command;
    let results;
    if (subject === "repos") {
      results = await this.github.repos(username);
    } else if (subject === "stars") {
      results = await this.github.stars(username);
    }
    parseQuery(command, results);
  }

  async parseQuery(command, results) {}
}

module.exports = CommandRunner;
