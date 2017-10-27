const CommandRunner = require('../src/CommandRunner');

describe("Command Runner", () => {

  beforeEach(() => {
    this.gitHub = {
      getRepos: () => {},
      getStarredRepos: () =>  {}
    };

    this.repoList = "repo list";
    this.starredList = "starred repo list";
    
    spyOn(this.gitHub, "getRepos").andReturn(Promise.resolve(this.repoList));
    spyOn(this.gitHub, "getStarredRepos").andReturn(Promise.resolve(this.starredList));

    this.gitHub.getRepos('griselda');
    this.gitHub.getStarredRepos('griselda');

    this.commandRunner = new CommandRunner(this.gitHub);
  });

  it("gets list of repo details", done => {
    let command = {
      query: "details",
      subject: "repos",
      username: "griselda"
    };
    this.commandRunner.run(command).then(output => {
      expect(this.gitHub.getRepos).toHaveBeenCalled();
      expect(output.result).toEqual([
        {name: 'Code-Coven', description: 'A version control system for weird sisters'},
        {name: 'Eye-Of-Newt', description: 'EON is a new frontend framework written in pure spaghetti code.'}
      ]);
      done();
    });
  });
  it("gets number of repos", done => {
    let command = {
      query: "count",
      subject: "repos",
      username: "griselda"
    };
    this.commandRunner.run(command).then(output => {
      expect(this.gitHub.getRepos).toHaveBeenCalledWith(command.username);
      expect(output.result).toEqual(2);
      done();
    });
  });

  it("gets list of starred repo details", done => {
    let command = {
      query: "details",
      subject: "starred repos",
      username: "griselda"
    };
    this.commandRunner.run(command).then(output => {
      expect(this.gitHub.getStarredRepos).toHaveBeenCalled();
      expect(output.result).toEqual([
        {name: 'Mocking-Birds', description: 'An application for the asynchronous ornithologist'}
      ]);
      done();
    });
  });

  it("gets number of starred repos", done => {
    let command = {
      query: "count",
      subject: "starred repos",
      username: "griselda"
    };
    this.commandRunner.run(command).then(output => {
      expect(this.gitHub.getStarredRepos).toHaveBeenCalledWith(command.username);
      expect(output.result).toEqual(1);
      done();
    });
  });
});