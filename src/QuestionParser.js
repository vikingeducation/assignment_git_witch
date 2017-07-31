class QuestionParser {
  constructor() {
    this.commandObj = {};
    this.parse = input => {
      let command;
      let inputArray = input.split(" ");
      command = this.getQuery(inputArray);
      command = this.getSubject(command);
      this.getUsername(command);
      return this.commandObj;
    };

    this.getQuery = inputArray => {
      if (inputArray[0] === "how") {
        this.commandObj.query = "count";
        return inputArray.slice(2);
      } else {
        this.commandObj.query = "details";
        return inputArray.slice(1);
      }
    };

    this.getSubject = command => {
      if (command[0] === "starred") {
        this.commandObj.subject = "starred repos";
        return command.slice(3);
      } else {
        this.commandObj.subject = "repos";
        return command.slice(2);
      }
    };

    this.getUsername = command => {
      this.commandObj.username = command[0];
    };
  }
}

module.exports = QuestionParser;
