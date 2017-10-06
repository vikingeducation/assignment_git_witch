const QuestionParser = require("./QuestionParser");
const qp = new QuestionParser();
//const cr = new CommandRunner();

class Gitwitch {
	process(inputArgv) {
		let parsedObject = qp.parse(inputArgv);
		//let dirtyApiObject = cr.run(parsedObject);
	}
}

module.exports = Gitwitch;
