var request = require("request");
require("dotenv").config();

class CommandRunner {
  run(parserObject) {
    let baseUrl = "https://api.github.com/users/";

    let url =
      baseUrl + parserObject.username + parserObject.query.split(" ")[0];

    let options = {
      username: process.env.ACCESS_KEY,
      url: url,
      Accept: "application/vnd.github.v3+json",
      headers: {
        "User-agent": "GitWitch application "
      }
    };

    return new Promise((resolve, reject) => {
      request.get(options, function(err, response, body) {
        if (err) {
          throw err;
        }

        body = JSON.parse(body);
        let returnObj;

        returnObj.username = parserObject.username;
        returnObj.subject = parserObject.subject;
        returnObj.query = parserObject.query;
        returnObj.repos = [];

        body.forEach(repo => {
          returnObj.repos.push(repo);
        });

        resolve(returnObj);
      });
    });
  }
}

module.exports = CommandRunner;
