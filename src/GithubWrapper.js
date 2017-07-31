require('dotenv').config();
const Github = require('github');

const github = new Github({
    protocol: "https",
    host: "api.github.com", // should be api.github.com for GitHub
    pathPrefix: "/api/v3", // for some GHEs; none for GitHub
    headers: {
        "user-agent": "My-Cool-GitHub-App" // GitHub is happy with a unique user agent
    },
    Promise: require('bluebird'),
    followRedirects: false, // default: true; there's currently an issue with non-get redirects, so allow ability to disable follow-redirects
    timeout: 5000,
    username: "Alex-Willenbrink"
});

// synchronous - don't worry about it

github.authenticate({type: "token", token: process.env.GITHUB_TOKEN});

let starredRepos = [];

var req = github.activity.getStarredRepos({ per_page: 100}, getRepos);
function getRepos(err, res) {
    if (err) {
        return false;
    }

    starredRepos = starredRepos.concat(res['data']);
    if (github.hasNextPage(res)) {
        github.getNextPage(res, getRepos)
    } else {
      console.log("made it here");
        outputStarredRepos();
    }
}

function outputStarredRepos() {
    console.log(starredRepos.map(function(repo) { return repo['full_name']; }));
    console.log('starred repos: ' + starredRepos.length);
}
