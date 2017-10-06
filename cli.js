const Gitwitch = require("./src/gitwitch");
const gitwitch = new Gitwitch();

//only read necessary info
var inputArgv = process.argv.slice(2).join(" ");
console.log(inputArgv);

//log result of entire application
console.log(await gitwitch.process(inputArgv));
