const QuestionParser = require("./QuestionParser");
const qp = new QuestionParser();

const CommandRunner = require("./commandrunner");
const cr = new CommandRunner();

const ResponseFormatter = require("./responseformatter");
const rf = new ResponseFormatter();

class Gitwitch {
	constructor() {
		this.qp = qp;
		this.cr = cr;
		this.rf = rf;
	}

	async process(inputArgv) {
		let parsedObject = this.qp.parse(inputArgv);
		let dirtyApiObject = await this.cr.run(parsedObject);
		return await this.rf.format(dirtyApiObject);
	}
}

module.exports = Gitwitch;
