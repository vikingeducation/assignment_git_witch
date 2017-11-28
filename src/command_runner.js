const caller = require("./github");

class CommandRunner {
  constructor() {}

  run(obj) {
    return caller(obj.username, obj.subject).then(result => {
      let responseObj = { result, ...obj };
      if (obj.query === "count") {
        console.log(responseObj);
        responseObj.result = responseObj.result.length; //array of repo objects
      }
      return responseObj;
    });
  }
}

let runs = new CommandRunner();
runs.run({ username: "Seeker0", query: "count", subject: "repos" });
