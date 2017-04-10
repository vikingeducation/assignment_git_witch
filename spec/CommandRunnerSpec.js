const CommandRunner = require('../src/CommandRunner');

describe("Command Runner", () => {
  beforeEach(() => {
    this.github = {
      getRepos() {},
      getStarredRepos() {}
    };

    this.sampleGitResponse = [
          {name: 'repo name', description: 'repo desc'},
          {name: 'repo two', description: 'repo desc two'}
    ];

    this.sampleStarredResponse = [
          {name: 'starred repo name', description: 'repo desc'},
          {name: 'starred repo two', description: 'repo desc two'},
          {name: 'starredrepo two', description: 'repo desc two'}
    ];

    spyOn(this.github, "getRepos").andReturn(Promise.resolve(this.sampleGitResponse));

    spyOn(this.github, "getStarredRepos").andReturn(Promise.resolve(this.sampleStarredResponse));

    this.commandRunner = new CommandRunner(this.github);

  });

  it("returns a list of repo details", done => {
    let testInput = {
      username: "griselda",
      subject: "repos",
      query: "count"
    }
    this.commandRunner.run(testInput).then((response) => {
      expect(this.github.getRepos).toHaveBeenCalledWith({username: testInput.username});
      expect(response).toEqual({
        username: "griselda",
        subject: "repos",
        query: "count",
        results: this.sampleGitResponse.length
      });
      done();
    })
  });

  it("returns a list of starred repo details", done => {
    let testInput = {
      username: "griselda",
      subject: "repos",
      query: "details"
    }
    this.commandRunner.run(testInput).then((response) => {
      expect(this.github.getRepos).toHaveBeenCalledWith({username: testInput.username});
      expect(response).toEqual({
        username: "griselda",
        subject: "repos",
        query: "details",
        results: this.sampleGitResponse
      });
      done();
    })
  });

  it("returns a count of repos", done => {
    let testInput = {
      username: "griselda",
      subject: "starred repos",
      query: "count"
    }
    this.commandRunner.run(testInput).then((response) => {
      expect(this.github.getStarredRepos).toHaveBeenCalledWith({username: testInput.username});
      expect(response).toEqual({
        username: "griselda",
        subject: "starred repos",
        query: "count",
        results: this.sampleStarredResponse.length
      });
      done();
    })
  });

  it("returns a count of starred repos", done => {
    let testInput = {
      username: "griselda",
      subject: "starred repos",
      query: "details"
    }
    this.commandRunner.run(testInput).then((response) => {
      expect(this.github.getStarredRepos).toHaveBeenCalledWith({username: testInput.username});
      expect(response).toEqual({
        username: "griselda",
        subject: "starred repos",
        query: "details",
        results: this.sampleStarredResponse
      });
      done();
    })
  });

});






// // Example 1
// let input = "how many repos does griselda have?"
// let output = {
//   username: "griselda",
//   subject: "repos",
//   query: "count"
// }

// // Example 2
// let input = "what repos does griselda have?"
// let output = {
//   username: "griselda",
//   subject: "repos",
//   query: "details"
// }

// // Example 3
// let input = "how many starred repos does griselda have?"
// let output = {
//   username: "griselda",
//   subject: "stars",
//   query: "count"
// }