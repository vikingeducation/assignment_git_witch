const CommandRunner = require("../src/CommandRunner");

describe("CommandRunner", () => {
  beforeEach(() => {
    this.reposOutput = [
      {
        name: "Cool-Repo",
        Description: "very cool!"
      },
      {
        name: "Another-Repo",
        Description: "nice repo!"
      },
      {
        name: "Bad-Repo",
        Description: "not very good"
    }];

    this.starredReposOutput = [
      {
        name: "Eye-of-Newt",
        Description: "EON is a new frontend framework written in pure spaghetti code."
    }];

    this.github = {
      getRepos: () => { return this.reposOutput; },
      getStarredRepos: () => { return this.starredReposOutput; }  
    };

    spyOn(this.github, "getRepos").andCallThrough();
    spyOn(this.github, "getStarredRepos").andCallThrough();

    this.runner = new CommandRunner(this.github);
  });

  it("returns array with details query", done => {
    const input = {
      subject: "repos",
      username: "griselda",
      query: "details"
    };

    const expected = this.reposOutput;

    this.runner.run(input).then(output => {
      expect(this.github.getRepos).toHaveBeenCalledWith(input.username);
      expect(output.results).toEqual(expected);
      expect(output.username).toEqual(input.username);
      expect(output.subject).toEqual(input.subject);
      expect(output.query).toEqual(input.query);
      done();
    });
  });

  it("returns a number with count query", done => {
    const input = {
      subject: "repos",
      username: "griselda",
      query: "count"
    };

    const expected = this.reposOutput.length;

    this.runner.run(input).then(output => {
      expect(this.github.getRepos).toHaveBeenCalledWith(input.username);
      expect(output.results).toEqual(expected);
      expect(output.username).toEqual(input.username);
      expect(output.subject).toEqual(input.subject);
      expect(output.query).toEqual(input.query);
      done();
    });
  });

  it("returns starred repos with count query", done => {
    const input = {
      subject: "starred repos",
      username: "griselda",
      query: "count"
    };

    const expected = this.starredReposOutput.length;

    this.runner.run(input).then(output => {
      expect(this.github.getStarredRepos).toHaveBeenCalledWith(input.username);
      expect(output.results).toEqual(expected);
      expect(output.username).toEqual(input.username);
      expect(output.subject).toEqual(input.subject);
      expect(output.query).toEqual(input.query);
      done();
    });
  });

  it("returns starred repos with details query", done => {
    const input = {
      subject: "starred repos",
      username: "griselda",
      query: "details"
    };

    const expected = this.starredReposOutput;

    this.runner.run(input).then(output => {
      expect(this.github.getStarredRepos).toHaveBeenCalledWith(input.username);
      expect(output.results).toEqual(expected);
      expect(output.username).toEqual(input.username);
      expect(output.subject).toEqual(input.subject);
      expect(output.query).toEqual(input.query);
      done();
    });
  });
});