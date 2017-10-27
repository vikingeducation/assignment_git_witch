const GitHub = require('./GitHub');

class CommandRunner {

  constructor() {
    this.gitHub = new GitHub();
  }

  async run(command) {
    const actions = {
      [['details', 'repos']]: this.gitHub.getRepos,
      [['details', 'starred repos']]: this.gitHub.getStarredRepos,
      [['count', 'repos']]: (username) => this.gitHub.getRepos(username).length,
      [['count', 'starred repos']]: (username) => this.gitHub.getStarredRepos(username).length
    }

    command.result = await actions[[command.query, command.subject]](command.username)
  
    return command;
  }
}

module.exports = CommandRunner;