class QuestionParser {
  constructor() {
    this.parse = input => {
      let command = {};
      let subject;
      let inputArray = input.split(" ");
      switch (inputArray[0]) {
        case "how":
          command.query = "count";
          subject = inputArray[2];
          break;
        case "what":
          command.query = "details";
          subject = inputArray[1];
          break;
      }
      switch (subject) {
        case "starred":
          command.subject = "starred repos";
          subject = inputArray[2];
          break;
        case "repos":
          command.subject = "repos";
          subject = inputArray[1];
          break;
      }
      switch (command.query.concat(subject)) {
        case "countstarred":
          command.username = inputArray[5];
          break;
        case "countrepos" || "whatstarred":
          command.username = inputArray[4];
          break;
        case "detailsrepos":
          command.username = inputArray[3];
          break;
      }
      return command;
    };
  }
}

module.exports = QuestionParser;
