var Github = require('github');
var secret_key = require('../secrets/github.js');

class GithubWrapper {
  constructor(){
    this.github = new Github;
    this.apikey = secret_key;
    this.authenticate();
  }

  authenticate(){
    this.github.authenticate({
    type: "token",
    token: this.apikey
    })
  }

  getRepos(obj){
   return this.github.repos.getForUser(obj)
  }

  getStarredRepos(obj){
    return this.github.activity.getStarredReposForUser(obj);
  }
}

module.exports = GithubWrapper;


// let gh = new GithubWrapper();

// let username = "nicoasp";

// gh.getRepos({username}).then((repoList) => {
//   console.log(repoList);
// })

