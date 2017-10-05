var gitwitch = require("./modules/gitwitch");

//only read necessary info
var inputArgv = process.argv.slice(2).join(" ");
console.log(inputArgv);

gitwitch.process(inputArgv);
