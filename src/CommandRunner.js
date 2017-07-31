const request = require("request");

class CommandRunner {
  constructor(command) {
    this.command = command;
  }
  run(this.command) {
    if (this.command.subject === "starred repos") {
      this.command.subject = "starred";
    }
    Promise.resolve(
      request.get(
        `https://api.github.com/users/${this.command.username}/${this.command.subject}`
      )
    ).then(data => {
      if (this.command.query === "count") {
        this.command.repos = data.length;
      } else {
        this.command.repos = data;
        return command;
      }
    });
  }
}

module.exports = CommandRunner;
