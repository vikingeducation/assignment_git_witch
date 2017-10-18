const http = require('http');
const request = require('request');

class Github {
  getRepoInfo(username, subject) {
    return new Promise((resolve, reject) => {
      var reqestObject = {
        url: `https://api.github.com/users/${ username }/${ subject }`,
        headers: { 'User-Agent': 'Viking' }
      };

      request.get(reqestObject, (err, res, body) => {
        if (err) {
          reject(err);
        } else {
          if (res.statusCode == 200) {
            body = JSON.parse(body);
            var results = [];

            for (let repo of body) {
              results.push({ name: repo.name, description: repo.description });
            }

            resolve(results);
          } else {
            reject(res.body);
          }
        }
      });
    }).catch(err => {
      console.log(err);
    });
  }
}

var github = new Github();

github.getRepoInfo('octocat', 'repos');

module.exports = Github;
