class CommandRunner {

  constructor(command) {
    this.runner = command.runner;
    this.gitHub = command.gitHub;
  }

  run(command) {

    if ((command.query === 'details') && (command.subject === 'repos'))
      return this.gitHub.getRepos(command.username);
    else if ((command.query === 'count') && (command.subject === 'repos'))
      return this.gitHub.countRepos(command.username);
    else if ((command.query === 'details') && (command.subject === 'starred repos')) 
      return this.gitHub.getStarredRepos(command.username);
    else if ((command.query === 'count') && (command.subject === 'starred repos'))
      return this.gitHub.countStarredRepos(command.username);
  
  }
}

module.exports = CommandRunner;