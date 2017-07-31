const CommandRunner = require("../src/CommandRunner");

describe("CommandRunner", () => {
  beforeEach(() => {
    this.runner = { run() {} };
    this.response = "response";

    this.gitHub = {
      getRepos() {},
      countRepos() {},
      getStarred() {},
      countStarred() {}
    };

    spyOn(this.gitHub, "getRepos").andReturn(Promise.resolve(this.response));
    spyOn(this.gitHub, "countRepos").andReturn(Promise.resolve(this.response));
    spyOn(this.gitHub, "getStarred").andReturn(Promise.resolve(this.response));
    spyOn(this.gitHub, "countStarred").andReturn(
      Promise.resolve(this.response)
    );

    this.commandRunner = new CommandRunner({
      runner: this.runner,
      gitHub: this.gitHub
    });
  });

  it("calls gitHub.getRepos and returns the response", done => {
    let options = {
      query: "details",
      subject: "repos",
      username: "Brunhilda"
    };
    this.commandRunner.run(options).then(output => {
      expect(this.gitHub.getRepos).toHaveBeenCalledWith("Brunhilda");
      expect(output).toEqual(this.response);
      done();
    });
  });
  it("calls gitHub.countRepos and returns the response", done => {
    let options = {
      query: "count",
      subject: "repos",
      username: "Brunhilda"
    };
    this.commandRunner.run(options).then(output => {
      expect(this.gitHub.countRepos).toHaveBeenCalledWith("Brunhilda");
      expect(output).toEqual(this.response);
      done();
    });
  });

  it("calls gitHub.starredRepos and returns the response", done => {
    let options = {
      query: "details",
      subject: "starred repos",
      username: "Brunhilda"
    };
    this.commandRunner.run(options).then(output => {
      expect(this.gitHub.getStarred).toHaveBeenCalledWith("Brunhilda");
      expect(output).toEqual(this.response);
      done();
    });
  });

  it("calls gitHub.countStarred and returns the response", done => {
    let options = {
      query: "count",
      subject: "starred repos",
      username: "Brunhilda"
    };
    this.commandRunner.run(options).then(output => {
      expect(this.gitHub.countStarred).toHaveBeenCalledWith("Brunhilda");
      expect(output).toEqual(this.response);
      done();
    });
  });
});
