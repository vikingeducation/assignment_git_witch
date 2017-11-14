const GitHub = require('./GitHub');

class CommandRunner {
  constructor() {
    this.gitHub = new GitHub();
  }

  run(command) {
    const gitHubResults = this._queryGitHub(command);
    let response = command;
    response.results = gitHubResults;
    return Promise.resolve(response);
  }

  _queryGitHub(command) {
    let reply;

    if (command.subject === 'repos') {
      reply = this.gitHub.getRepos(command.username);
    } else if (command.subject === 'starred repos') {
      reply = this.gitHub.getStarredRepos(command.username);
    }

    if (command.query === 'count') {
      reply = reply.length;
    }
    return reply;
  }
}

module.exports = CommandRunner;
