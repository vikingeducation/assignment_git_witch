const QuestionParser = require('./QuestionParser');
const CommandRunner = require('./CommandRunner');
const ResponseFormatter = require('./ResponseFormatter');
const GitWitch = require('./GitWitch');
const GitHub = require('./GitHub');

let args = process.argv.slice(2, process.argv.length);
let command = args.join(' ');

const github = new GitHub();
const parser = new QuestionParser();
const runner = new CommandRunner(github);
const formatter = new ResponseFormatter();
const gitwitch = new GitWitch({
  parser,
  runner,
  formatter
});

let results = gitwitch.process(command);
results.then(result => console.log(result));