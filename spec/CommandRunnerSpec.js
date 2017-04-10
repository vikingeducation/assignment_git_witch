const CommandRunner = require("../src/CommandRunner");

describe("CommandRunner", () => {
  beforeEach(() => {
    let github = {
      repos: () => {
        return Promise.resolve('repo list');
      },
      stars: () => {
        return Promise.resolve('starred list');
      }
    };
    this.commandRunner = new CommandRunner(github);
  });

  it("returns a list of repos when query is 'details' and subject is 'repos'", done => {
    let command = {
      username: 'griselda',
      query: 'details',
      subject: 'repos'
    };
    this.commandRunner.run(command)
  });
});
