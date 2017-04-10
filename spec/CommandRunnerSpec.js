const CommandRunner = require("../src/CommandRunner");

describe("CommandRunner", () => {
  beforeEach(() => {
    this.github = {
      repos: () => {},
      stars: () => {}
    };

    this.repoList = {
      data: "repo list"
    };
    this.starList = {
      data: "starred list"
    };

    spyOn(this.github, "repos").andReturn(Promise.resolve(this.repoList));
    spyOn(this.github, "stars").andReturn(Promise.resolve(this.starList));

    this.commandRunner = new CommandRunner(this.github);
  });

  it("returns a list of repos when subject is 'repos' and query is 'details'", done => {
    let command = {
      username: "griselda",
      subject: "repos",
      query: "details"
    };
    this.commandRunner.run(command).then(response => {
      expect(this.github.repos).toHaveBeenCalledWith(command.username);
      expect(response.result).toEqual("repo list");
      done();
    });
  });

  it("returns a list of starred repos when subject is 'stars' and query is 'details'", done => {
    let command = {
      username: "griselda",
      subject: "stars",
      query: "details"
    };
    this.commandRunner.run(command).then(response => {
      expect(this.github.stars).toHaveBeenCalledWith(command.username);
      expect(response.result).toEqual("starred list");
      done();
    });
  });

  it("returns a count of repos when subject is 'repos' and query is 'count'", done => {
    let command = {
      username: "griselda",
      subject: "repos",
      query: "count"
    };
    this.commandRunner.run(command).then(response => {
      expect(this.github.repos).toHaveBeenCalledWith(command.username);
      expect(response.result).toEqual(9);
      done();
    });
  });

  it("returns a count of repos when subject is 'stars' and query is 'count'", done => {
    let command = {
      username: "griselda",
      subject: "stars",
      query: "count"
    };
    this.commandRunner.run(command).then(response => {
      expect(this.github.stars).toHaveBeenCalledWith(command.username);
      expect(response.result).toEqual(12);
      done();
    });
  });
});
