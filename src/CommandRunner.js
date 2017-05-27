class CommandRunner {
  constructor(api) {
    this.getRepos = api.getRepos;
    this.getStarredRepos = api.getStarredRepos;
  }

  run(command) {
    let repos = this._parseCommand(command.subject, command.username, command.query);

    let result = {
      subject: command.subject,
      username: command.username,
      query: command.query,
      results: repos
    };

    return Promise.resolve(result);
  }

  _parseCommand(subject, username, query) {
    let repos;
    
    if (subject === "repos") {
      repos = this.getRepos(username);
    } else if (subject === "starred repos") {
      repos = this.getStarredRepos(username);
    }

    if (query === "count") {
      repos = repos.length;
    }

    return repos;
  }
}

module.exports = CommandRunner;