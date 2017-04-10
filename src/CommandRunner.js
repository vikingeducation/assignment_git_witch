// const GithubWrapper = require('./GithubWrapper');

class CommandRunner {
  constructor(github){
    this.github = github;
    // this.github = github || GithubWrapper;
  }

  run(input){
    // run takes some input and queries Github for a result
    // this should return a promise
    return new Promise((resolve, reject) => {
      let output = input;
      this.github.getRepos(input).then((result) => {
        output.results = result;
        resolve(output)
      })
    })
  }
}

module.exports = CommandRunner;