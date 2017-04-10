const CommandRunner = require('../src/CommandRunner');

describe("Command Runner", () => {
  beforeEach(() => {
    this.github = {
      getRepos(output) {
        let sampleResult = [
          {name: 'repo name' description: 'repo desc'},
          {name: 'repo two' description: 'repo desc two'}
        ]
        return (Promise.resolve(sampleResult));
      }
    };
    this.commandRunner = new CommandRunner();

  });

  it("queries Github for a user's repo count", done => {
    this.commandRunner.run()

  });

  xit("queries Github for a user's repo list", done => {

  });

  xit("queries Github for a user's starred repo count", done => {

  });

  xit("queries Github for a user's starred repo list", done => {

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