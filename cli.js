const QuestionParser = require("./lib/questionParser");
const CommandRunner = require("./lib/commandRunner");
const Command = require("./lib/commandRunner/command");

let qp = new QuestionParser();
let cr = new CommandRunner();
let cmd = qp.parse("what repos does ericglover have?");

cr.run(cmd).then(results => {
  console.log(results);
});
