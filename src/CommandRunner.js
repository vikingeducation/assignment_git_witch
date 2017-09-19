const request = require("request");
var stream = require("stream");

class CommandRunner {
  constructor(command) {
    this.command = command;
  }
  run() {
    return new Promise(resolve => {
      if (this.command.subject === "starred repos") {
        this.command.subject = "starred";
      }
      Promise.resolve(
        request
          .get(
            `https://api.github.com/users/${this.command.username}/${this
              .command.subject}`
          )
          .on("data", data => {
            //currently returns a buffer!
            console.log(data);
          })
      ).then(data => {
        if (this.command.query === "count") {
          this.command.repos = data.length;
        } else {
          this.command.repos = data;
        }
        resolve(this.command);
      });
    });
  }
}

module.exports = CommandRunner;
