
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
    } else if(question === "what") {
      return "details";
    } else {
      return "error";
    }
  }

  getSubject(input) {
    if(input.split(" ").includes("starred")) {
      return "starred repos";
    } else {
      return "repos";
    }
  }
}













module.exports =
