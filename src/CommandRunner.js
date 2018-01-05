const GithubWrapper = require('./GithubWrapper');
const defaultWrapper = new GithubWrapper();

class CommandRunner {
  constructor(github){
    this.github = github || defaultWrapper;
  }

  run(input){
    return new Promise((resolve, reject) => {
      let username = input.username;
      let output = input;
      if (input.subject === "repos") {
        this.github.getRepos({username}).then((result) => {
          output.results = input.query === "details" ? result : result.length
          resolve(output)
        })
      } else {
        this.github.getStarredRepos({username}).then((result) => {
          output.results = input.query === "details" ? result : result.length
          resolve(output)
        })
      }
    })
  }
}

module.exports = CommandRunner;