const GitHubApi = require("github");

class CommandRunner {
  constructor(github = GitHubApi) {
    this.github = new github({
      // optional
      debug: true,
      protocol: "https",
      host: "api.github.com", // should be api.github.com for GitHub
      pathPrefix: "/api/v3", // for some GHEs; none for GitHub
      headers: {
        "user-agent": "My-Cool-GitHub-App" // GitHub is happy with a unique user agent
      },
      // Promise: require("bluebird"),
      followRedirects: false, // default: true; there's currently an issue with non-get redirects, so allow ability to disable follow-redirects
      timeout: 5000
    });
  }

  run(command) {
    return new Promise(resolve => {
      let index = command.subject.indexOf(" ");
      console.log(command);
      if (index != -1) {
        command.subject = "activity";
      }

      this.github[command.subject]
        [command.query](command.options)
        .then(results => {
          resolve({
            command: command,
            results: results
          });
          console.log(results);
        });
    });
  }
}

module.exports = CommandRunner;
