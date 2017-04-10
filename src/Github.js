const GitHubApi = require("github");
const githubApi = new GitHubApi();
const token = process.env.GITHUB_API_KEY;

class Github {
  constructor() {
    githubApi.authenticate({
      type: "token",
      token: token
    });
  }

  repos(username) {
    return githubApi.repos.getForUser({ username });
  }

  stars(username) {
    return githubApi.activity.getStarredReposForUser({ username });
  }
}

module.exports = Github;
