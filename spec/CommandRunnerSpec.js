const CommandRunner = require("../src/CommandRunner");

describe("CommandRunner", () => {
  beforeEach(() => {
    this.github = {
      repos: () => {},
      stars: () => {},
      repoCount: () => {},
      starCount: () => {}
    };

    this.repoList = "repo list";
    this.starList = "star list";

    spyOn(this.github, "repos").andReturn(Promise.resolve(this.repoList));
    spyOn(this.github, "stars").andReturn(Promise.resolve(this.starList));
    
    this.commandRunner = new CommandRunner(this.github);
  });

  it("returns a list of repos when subject is 'repos'", done => {
    let command = {
      username: "griselda",
      subject: "repos"
    };
    this.commandRunner.run(command).then(response => {
      expect(this.github.repos).toHaveBeenCalledWith(command.username);
      expect(response).toEqual('repo list');
      done();
    });
  });

  it("returns a list of starred repos when subject is 'stars'", done => {
    let command = {
      username: "griselda",
      subject: "stars"
    };
    this.commandRunner.run(command).then(response => {
      expect(this.github.stars).toHaveBeenCalledWith(command.username);
      expect(response).toEqual('star list');
      done();
    });
  });
});
