require('dotenv').config();
const Github = require('github-api');

const github = new Github({
  username: "Alex-Willenbrink",
  oauth_token: process.env.GITHUB_TOKEN,
  protocol: "https"
   /* also acceptable:
      token: 'MY_OAUTH_TOKEN'
    */
});

var AlexWillenbrink = github.getUser('Alex-Willenbrink');

let Repos = new Promise ((resolve, reject)=> {
    AlexWillenbrink.listStarredRepos(function(err, repos) {
    if (err) {
      console.log(err);
      reject(err)
    };
    resolve(repos);
    })
});

Repos.then(repos => {
    console.log(repos)
})

// var me = github.getUser(); // no user specified defaults to the user for whom credentials were provided
// me.listNotifications(function(err, notifications) {
//    // do some stuff
// });



// synchronous - don't worry about it

// github.authenticate({type: "token", token: process.env.GITHUB_TOKEN});

// let starredRepos = [];

// var req = github.activity.getStarredRepos({ per_page: 100}, getRepos);
// function getRepos(err, res) {
//     if (err) {
//         return false;
//     }

//     starredRepos = starredRepos.concat(res['data']);
//     if (github.hasNextPage(res)) {
//         github.getNextPage(res, getRepos)
//     } else {
//       console.log("made it here");
//         outputStarredRepos();
//     }
// }

// function outputStarredRepos() {
//     console.log(starredRepos.map(function(repo) { return repo['full_name']; }));
//     console.log('starred repos: ' + starredRepos.length);
// }
