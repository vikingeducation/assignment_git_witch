const GitHub = require('./GitHub');

var CommandRunner = function(github = GitHub) {
  this.github = github;
};

CommandRunner.prototype.run = function(question) {
  return new Promise((resolve, reject) => {
    this.github
      .query(question)
      .then(result => {
        if (result) {
          var details = [];
          //for each repo in result
          result.forEach(repo => {
            details.push({
              name: repo.name,
              description: repo.description
            });
          });
          var returnedObject = {
            username: question.username,
            subject: question.subject,
            query: question.query,
            result: details
          };
          resolve(returnedObject);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
};

module.exports = CommandRunner;
