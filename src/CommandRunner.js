const gitHub = require("../src/GitHub")();

const CommandRunner = function() {
  const commandRunner = {
    run: function(user) {
      return gitHub.getRepos(user);
    }
  };
  return commandRunner;
};

module.exports = CommandRunner;
