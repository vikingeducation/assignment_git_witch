const CommandRunner = require('../src/CommandRunner');

describe("Command Runner", () => {

  beforeEach(() => {
    this.runner = { run() {} };

    this.gitHub = {
      getRepos() {},
      countRepos() {},
      getStarredRepos() {},
      countStarredRepos() {}
    };

    let sampleGitResponse = [
      {name: 'repo one', description: 'repo description one'},
      {name: 'repo two', description: 'repo description two'}
    ];

    let sampleStarredResponse = [
      {name: 'starred repo one', description: 'repo description one'},
      {name: 'starred repo two', description: 'repo description two'},
      {name: 'starred repo three', description: 'repo description three'}
    ];

    spyOn(this.gitHub, "getRepos").andReturn(Promise.resolve(sampleGitResponse));
    spyOn(this.gitHub, "countRepos").andReturn(Promise.resolve(sampleGitResponse.length));
    spyOn(this.gitHub, "getStarredRepos").andReturn(Promise.resolve(sampleStarredResponse));
    spyOn(this.gitHub, "countStarredRepos").andReturn(Promise.resolve(sampleStarredResponse.length));

    this.commandRunner = new CommandRunner({
      runner: this.runner,
      gitHub: this.gitHub
    });
  });

  it("gets list of repo details", done => {
    let command = {
      query: "details",
      subject: "repos",
      username: "test"
    };
    this.commandRunner.run(command).then(output => {
      expect(this.gitHub.getRepos).toHaveBeenCalledWith("test");
      expect(output).toEqual([
        {name: 'repo one', description: 'repo description one'},
        {name: 'repo two', description: 'repo description two'}
      ]);
      done();
    });
  });
  it("gets number of repos", done => {
    let command = {
      query: "count",
      subject: "repos",
      username: "test"
    };
    this.commandRunner.run(command).then(output => {
      expect(this.gitHub.countRepos).toHaveBeenCalledWith("test");
      expect(output).toEqual(2);
      done();
    });
  });

  it("gets list of starred repo details", done => {
    let command = {
      query: "details",
      subject: "starred repos",
      username: "test"
    };
    this.commandRunner.run(command).then(output => {
      expect(this.gitHub.getStarredRepos).toHaveBeenCalledWith("test");
      expect(output).toEqual([
        {name: 'starred repo one', description: 'repo description one'},
        {name: 'starred repo two', description: 'repo description two'},
        {name: 'starred repo three', description: 'repo description three'}
      ]);
      done();
    });
  });

  it("gets number of starred repos", done => {
    let command = {
      query: "count",
      subject: "starred repos",
      username: "test"
    };
    this.commandRunner.run(command).then(output => {
      expect(this.gitHub.countStarredRepos).toHaveBeenCalledWith("test");
      expect(output).toEqual(3);
      done();
    });
  });
});