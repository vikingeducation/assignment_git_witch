var request = require('request');

const baseURI = 'https://api.github.com/users';

var GitHub = {
  query: function(question) {
    var url = `${baseURI}/${question.username}/`;

    if (question.subject === 'repos') {
      url += `repos`;
    } else {
      url += `starred`;
    }

    var options = {
      url: url,
      headers: {
        'User-Agent': 'tketron'
      }
    };

    return new Promise((resolve, reject) => {
      request(options, function(error, response, body) {
        if (!error & (response.statusCode === 200)) {
          resolve(JSON.parse(body));
        } else {
          reject(error);
        }
      });
    });
  }
};

module.exports = GitHub;
