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
    return new Promise((resolve, reject) => {
      this.github.repos.getForUser(obj).then((data) => {
        let repos = data.data;
        repos = repos.map((repo) => {
          return {name: repo.name, description: repo.description}
        })
        resolve(repos);
      })
    })
   
  }

  getStarredRepos(obj){
    return new Promise((resolve, reject) => {
      this.github.activity.getStarredReposForUser(obj).then((data) => {
        let repos = data.data;
        repos = repos.map((repo) => {
          return {name: repo.name, description: repo.description}
        })
        resolve(repos);
      })
    })

  }
}

module.exports = GithubWrapper;


// let gh = new GithubWrapper();
// let username = "eriktrautman";

// gh.getStarredRepos({username}).then((repoList) => {
//  console.log(repoList);
// })

