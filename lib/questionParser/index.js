const Command = require('../commandRunner/command.js');
class QuestionParser {
	parse(query) {
		// "what repos does griselda have?"
		let reg = /^(?:(what)|(how\smany))\s(?:(starred\s?repos)|(repos))\sdoes\s([a-z0-9]+)\shave/gi;

		//let matches = query.match(reg);
		let matches = reg.exec(query);
		if (matches === null) {
			//handle error
			return null;
		}

		matches = matches.filter(ele => ele !== undefined);
		let command = matches[1];
		let subj = matches[2];
		if (subj === 'starred repos') {
			subj = 'activity';
		}
		let user = matches[3];

		// Instantiate new command.
		let cmdObj = Command[command];
		cmdObj.subject = subj;
		cmdObj.username = user;

		// Return the command object.
		return cmdObj;
	}
}

module.exports = QuestionParser;
