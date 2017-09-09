const GitWitch = require('../src/GitWitch');
const QuestionParser = require('../src/QuestionParser');
const CommandRunner = require('../src/CommandRunner');
const ResponseFormatter = require('../src/ResponseFormatter');

var args = process.argv;
var question = args.slice(2, args.length).join(' ');

const qp = new QuestionParser();
const cr = new CommandRunner();
const rf = new ResponseFormatter();
const gw = new GitWitch({
  parser: qp,
  runner: cr,
  formatter: rf
});

gw
  .process(question)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });
