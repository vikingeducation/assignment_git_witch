const QuestionParser = require("./QuestionParser");
const qp = new QuestionParser();

const CommandRunner = require("./commandrunner");
const cr = new CommandRunner();

class Gitwitch {
	constructor() {
		this.qp = qp;
		this.cr = cr;
	}

	async process(inputArgv) {
		let parsedObject = this.qp.parse(inputArgv);
		let dirtyApiObject = await this.cr.run(parsedObject);
		console.log(dirtyApiObject);
	}
}

module.exports = Gitwitch;
