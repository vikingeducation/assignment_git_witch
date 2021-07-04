
// const githubWrapper = require("./GithubWrapper");


class CommandRunner {
  constructor(githubWrapper) {
      this.githubWrapper = githubWrapper;
  }

  getGitHubInfo(commandObj) {
    return githubWrapper(commandObj);
  }
}


module.exports = CommandRunner;
