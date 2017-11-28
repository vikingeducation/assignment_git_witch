const GitWitch = require("./GitWitch.js");
const QuestionParser = require("./QuestionParser.js");
const CommandRunner = require("./CommandRunner.js");
const ResponseFormatter = require("./ResponseFormatter.js");

GitObject = {
  parser: new QuestionParser(),
  runner: new CommandRunner(),
  formatter: new ResponseFormatter()
};

let arguments = [];
let string = "";
arguments = process.argv;
arguments = arguments.slice(2);
string = arguments.join(" ");

let gw = new GitWitch(GitObject);

gw.process(string).then(output => {
  console.log(output);
});
