const Command = require("../commandRunner/command.js");
class QuestionParser {
  parse(query) {
    //query = "what repos does griselda have?"
    // how many repos
    // "what starred repos
    // /repos?/;
    let index = query.indexOf("repos") + 5;
    let command = query.slice(0, index);
    // let commands = {
    //   'What'
    // }
  }
}

module.exports = QuestionParser;
