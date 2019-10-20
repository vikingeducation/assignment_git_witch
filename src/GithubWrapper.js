const http = require('http');
const request = require('request');
require('dotenv').config();

class Github {
  constructor(token) {
    this.token = token;
  }

  getRepoInfo(parserResults) {
    return new Promise((resolve, reject) => {
      var reqestObject = {
        url: `https://api.github.com/users/${ parserResults.username }/${ parserResults.subject }`,
        headers: {
          'User-Agent': 'Viking',
          'Authorization': `token ${ this.token }`
        }
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

            parserResults.repos = results;
            resolve(parserResults);
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

module.exports = Github;
