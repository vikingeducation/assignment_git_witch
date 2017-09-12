const GitWitch = require("../src/GitWitch")();

const GitWitchCli = function() {
  const gitWitchCli = {
    process: function() {
      var input = process.argv;
      input = input.splice(2, input.length);
      input = input.join(" ");

      GitWitch.process(input)
        .then(output => {
          process.stdout.write(output);
        })
        .catch(output => {
          process.stdout.write(output);
        });
    }
  };
  return gitWitchCli;
};

module.exports = GitWitchCli;
