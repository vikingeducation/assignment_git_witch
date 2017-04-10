const ui = require("./lib/ui");
const languageParser = require("./languageParser");

process.stdin.resume();
process.stdin.setEncoding("utf8");

var inputArr = process.argv;

inputArr.slice(2);

console.log(inputArr + " " + typeof inputArr);

languageParser.parse(inputArr);
