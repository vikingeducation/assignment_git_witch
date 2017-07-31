const CommandRunner = require("../src/CommandRunner");


describe("CommandRunner", () => {
  let commandRunner, githubWrapper;

  beforeEach(() => {

    githubWrapper = function(commandObj) {
      return null;
    }


  })

  it("invokes the githubWrapper function", () => {
    const commandRunner = new CommandRunner(githubWrapper);

    let commandObj = {
      username: "Rambo",
      query: "count",
      subject: "repos"
    }
    
    expect(commandRunner.githubWrapper(commandObj)).toEqual(null);
  })

})
