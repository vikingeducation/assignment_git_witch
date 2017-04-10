const GitHubApi = require("github");
const githubApi = new GitHubApi();
const token = process.env.GITHUB_API_KEY;

class Github {
  constructor() {
    github.authenticate({
      type: "token",
      token: token
    });
  }

  repos(username) {
    githubApi.repos.getForUser({ username });
  }

  stars(username) {
    githubApi.activity.getStarredReposForUser({ username });
  }
}

module.exports = Github;
