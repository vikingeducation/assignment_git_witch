const Command = require('../commandRunner/command.js');
class QuestionParser {
	parse(query) {
		//query = "what repos does griselda have?"
		// how many repos
		// "what starred repos
		// /repos?/;
		let index = query.indexOf('repos') - 1;
		let command = query.slice(0, index);
		let subj = query.slice(index + 1, index + 6);
		let user = query.slice(index + 12, query.lastIndexOf(' '));

		// Instantiate new command.
		let cmdObj = Command[command];
		cmdObj.subject = subj;
		cmdObj.username = user;

		// Return the command object.
		return cmdObj;
	}
}

module.exports = QuestionParser;
