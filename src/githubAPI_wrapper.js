let Github = require('github');
let github = new Github();
let env = require('dotenv').config();

let gitWrapper = {};

github.authenticate({
    type: 'token',
    token: process.env.GITHUB_API_TOKEN
});

gitWrapper.getCommits = (user, repo) => {
  return github.repos.getCommits({
    owner: user,
    repo: repo,
    sha: 'master',
  });
};

gitWrapper.getRepos = (user) => {
  
};

gitWrapper
  .getCommits('JohnRPB', 'assignment_express_portfolio')
  .then(onfulfilled => {
    console.log(process.env.HAI_KEY);
    console.log(onfulfilled.data);
  })
  .catch(onRejected => {
    console.log(onRejected);
  });

module.exports = gitWrapper;


