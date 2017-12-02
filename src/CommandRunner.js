var request = require("request");
require("dotenv").config();

class CommandRunner {
  run(parserObject) {
    let baseUrl = "https://api.github.com/users/";

    let url = `${baseUrl}${parserObject.username}/${
      parserObject.subject.split(" ")[0]
    }`;

    let options = {
      username: process.env.ACCESS_KEY,
      url,
      Accept: "application/vnd.github.v3+json",
      headers: {
        "User-agent": "GitWitch application "
      }
    };

    return new Promise((resolve, reject) => {
      request.get(options, (err, response, body) => {
        if (err) {
          reject(err);
        }

        let returnObj = Object.assign({}, parserObject, {
          repos: JSON.parse(body)
        });

        resolve(returnObj);
      });
    });
  }
}

module.exports = CommandRunner;
