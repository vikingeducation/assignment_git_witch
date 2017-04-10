class QuestionParser {
  constructor() {
    this.output = {};
  }
  parse(question) {
    let inputArr = question.split(" ");
    //let inputLength = inputArr.length;
    let keyWord = inputArr[1];
    let username = inputArr.reverse()[1];

    switch (keyWord) {
      case "repos": //"what repos does griselda have?"
        this.output = {
          username: username,
          subject: "repos",
          query: "details"
        };
        return this.output;
      case "starred": //"what starred repos does griselda have?"
        this.output = {
          username: username,
          subject: "starred repos",
          query: "count"
        };
        return this.output;
      case "many": //"how many repos does brunhilde55 have?"
        this.output = {
          username: username,
          subject: "repos",
          query: "count"
        };
        return this.output;
      default:
    }
  }
}

module.exports = QuestionParser;
