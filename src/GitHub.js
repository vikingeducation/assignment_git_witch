const request = require("request");

const options = function(username) {
  const optionsObject = {
    url: `https://api.github.com/users/${username}/repos?per_page=100`,
    qs: {
      type: "all",
      sort: "full_name",
      direction: "asc"
    },
    headers: {
      "User-Agent": username
    }
  };
  return optionsObject;
};

const GitHub = function() {
  const gitHub = {
    getRepos: function(username) {
      return new Promise((resolve, reject) => {
        request(options(username), (err, res, body) => {
          if (!err && res.statusCode == 200) {
            body = JSON.parse(body);
            resolve(body);
          } else {
            reject(err);
          }
        });
      });
    }
  };
  return gitHub;
};

module.exports = GitHub;
