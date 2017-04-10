const GitWitch = require('./GitWitch');
const QuestionParser = require("./QuestionParser");
const CommandRunner = require("./CommandRunner");
const ResponseFormatter = require("./ResponseFormatter");

const gitWitch = new GitWitch({
  new QuestionParser(),
  new CommandRunner(),
  new ResponseFormatter()
});

const command = process.argv.slice(2).join(" ");
console.log(gitWitch.process(command));
