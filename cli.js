const QuestionParser = require('./lib/questionParser');
const Command = require('./lib/commandRunner/command');

let qp = new QuestionParser();
console.log(qp.parse('what repos does griselda have'));
