
class QuestionParser {

  parse(input) {
    let userMatch = /does\s+(\w*)\s+have/;
    let username = userMatch.exec(input)[1];

    let subjectMatch = /\s+(\w+\s*\w*)\s+does/;
    let subject = subjectMatch.exec(input)[1];

    let splitInput = input.split(" ");
    let query;
    if (splitInput[0] === "what") {
      query = "details";
    } else if (splitInput[0] === "how" && splitInput[1] === "many") {
      query = "count";
    }

    return {username, subject, query}
  }

}

module.exports = QuestionParser;