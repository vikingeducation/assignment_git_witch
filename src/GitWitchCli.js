const GitWitch = require('../src/GitWitch')();

const GitWitchCli = function () {
  const gitWitchCli = {
    process: function () {
      const input = process.argv[2];
      GitWitch.process(input).then( (output) => {
        console.log(output);
      }).catch( (output)=> {
        console.log(output);
      });
    },
  }
  return gitWitchCli;
}

module.exports = GitWitchCli;
