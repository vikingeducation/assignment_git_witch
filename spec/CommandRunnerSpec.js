var CommandRunner = require('../src/CommandRunner');

describe('CommandRunner', () => {
  describe('.run', () => {
    let github, command, expectedResults, commandRunner;

    beforeEach(() => {
      command = {
        username: "griselda",
        subject: "repos",
        query: "count"
      };

      expectedResults = {
        username: "griselda",
        subject: "repos",
        query: "count",
        repos: [
          { name: 'firstRepo', description: 'Some good things' },
          { name: 'secondRepo', description: 'More good things' },
          { name: 'thirdRepo', description: "All good things" }
        ]
      };

      github = { getRepoInfo() { return parserResults; } };
      spyOn(github, 'getRepoInfo').and.returnValue(Promise.resolve(expectedResults));
      commandRunner = new CommandRunner(github);
    });

    it('returns the results from the GithubWrapper', done => {
      commandRunner.run(command).then(results => {
        expect(commandRunner.github.getRepoInfo).toHaveBeenCalled();
        expect(results).toEqual(expectedResults);
        done();
      });
    });
  });
});
