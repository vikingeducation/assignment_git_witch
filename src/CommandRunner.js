var request = require('request');
class CommandRunner {

}
var url = 'https://api.github.com/users/SamuelLangenfeld/repos'

var options = {
  url: url,
  Accept: "application/vnd.github.v3+json",
  headers: {
    'User-agent': "Githuh application "
  }
};
request.get(options, function(err, response, body) {
  if (err) {
    throw err;
  }

  body = JSON.parse(body);
  body.forEach(repo => {
    console.log(repo.name);
    console.log(repo.description);
  })
});

module.exports = CommandRunner;