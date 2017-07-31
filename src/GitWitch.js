const { parse } = require("./QuestionParser.js");
const { run } = require("./CommandRunner.js");
const { format } = require("./ResponseFormatter.js");

class GitWitch {
  process(input) {
    let command = parse(input);
    Promise.resolve(run(command)).then(response => {
      format(response);
    });
    // run(command).then(
    //   // something
    // )
  }
}

module.exports = GitWitch;
