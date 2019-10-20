const GithubApi = require('../src/GithubWrapper');
const github = new GithubApi();

class CommandRunner {
  constructor(github) {
    this.github = github;
  }

  run(command) {
    return new Promise((resolve, reject) => {
      this.github.getRepoInfo(command).then(response => {
        resolve(response);
      });
    });
  }
}

module.exports = CommandRunner;
