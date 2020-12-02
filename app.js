const ui = require("./lib/ui");
const languageParser = require("./languageParser");
const QuestionParser = require("./src/QuestionParser");

process.stdin.resume();
process.stdin.setEncoding("utf8");



var inputArr = process.argv.slice(2).join(" ");
QuestionParser.parse(inputArr);


// var queryObject = languageParser.parse(inputArr);
