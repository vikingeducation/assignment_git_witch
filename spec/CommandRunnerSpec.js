const CommandRunner = require('../src/CommandRunner');

describe("Command Runner", () => {
  let testInput;

  beforeEach(() => {
    this.github = { getRepos() {} };

    this.sampleGitResponse = [
          {name: 'repo name', description: 'repo desc'},
          {name: 'repo two', description: 'repo desc two'}
    ];

    spyOn(this.github, "getRepos").andReturn(Promise.resolve(this.sampleGitResponse));

    this.commandRunner = new CommandRunner();

    testInput = {
      username: "griselda",
      subject: "repos",
      query: "count"
    }

  });

  it("returns an object with the info from Github", done => {
    this.commandRunner.run(testInput).then((response) => {
      expect(this.github.getRepos).toHaveBeenCalledWith(testInput);
      expect(response).toEqual({
        username: "griselda",
        subject: "repos",
        query: "count",
        results: this.sampleGitResponse
      })
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