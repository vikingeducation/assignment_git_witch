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
          process.stdout.write("\n");
        });
    }
  };
  return gitWitchCli;
};

GitWitchCli().process();

module.exports = GitWitchCli;
