require('dotenv').config();
const Github = require('github-api');

const github = new Github({
  // username: "Alex-Willenbrink",
  oauth_token: process.env.GITHUB_TOKEN,
  protocol: "https"
   /* also acceptable:
      token: 'MY_OAUTH_TOKEN'
    */
});

class GithubWrapper {
  constructor() {}

  // make an instance of github
  // pass the username through createGithubUser
  // pass it through starredrepos or repos

  createGithubUser(github, username) {
    return github.getUser(`${username}`)
  }

  getRepoType(githubUser, query) {
    if(subject === "starred repos"){
        return new Promise ((resolve, reject) => {
    githubUser.listStarredRepos(function(err, repos) {
    if (err) {
      console.log(err);
      reject(err)
    };
    resolve(repos);
    })
    }
  }
  if (subject === "repos") {
    return new Promise ((resolve, reject) => {
    githubUser.listRepos(function(err, repos) {
    if (err) {
      console.log(err);
      reject(err)
    };
    resolve(repos);
    })
    }
  }
}
module.exports = GithubWrapper;
