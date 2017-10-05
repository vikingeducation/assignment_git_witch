const { parse } = require("./parser");

class Gitwitch {
	process(inputArgv) {
		let parsedObject = parse(inputArgv);
		console.log(parsedObject);
	}
}
