
class QuestionParser {

  constructor() {}

  parse (input) {
      return {
        username: this.getUsername(input),
        query: this.getQuery(input),
        subject: this.getSubject(input)
      }
  }

  getUsername(input) {
    let inputArray = input.split(" ");
    return inputArray[inputArray.length - 2];
  }

  getQuery(input) {
    let question = input.split(" ")[0].toLowerCase();
    if(question === "how") {
      return "count";
    }

    if(question === "what") {
      return "details";
    }

    return "error";

  }

  getSubject(input) {
    return input.split(" ").includes("starred") ? "starred repos" : "repos";
  }
}

module.exports = QuestionParser
