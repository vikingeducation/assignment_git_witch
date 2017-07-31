const QuestionParser = require('./lib/questionParser');
const CommandRunner = require('./lib/commandRunner');
const Command = require('./lib/commandRunner/command');

let qp = new QuestionParser();
let cr = new CommandRunner();
cr.run(qp.parse('what repos does griselda have')).then(console.log);
