const GitWitch = require('./GitWitch');
const QuestionParser = require('./QuestionParser');
const CommandRunner = require('./CommandRunner');
const ResponseFormatter = require('./ResponseFormatter');

let args = process.argv;
let question = args.slice(2, args.length).join(' ');

const parser = new QuestionParser();
const runner = new CommandRunner();
const formatter = new ResponseFormatter();
const gitwitch = new GitWitch({ parser: parser, runner: runner, formatter: formatter });

gitwitch
  .process(question)
  .then(result => console.log(result))
  .catch(error => console.error(error))