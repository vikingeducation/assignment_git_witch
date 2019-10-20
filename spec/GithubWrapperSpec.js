const GithubApi = require('../src/GithubWrapper');
const github = new GithubApi(process.env.GITHUB_TOKEN);

describe('GithubWrapper', () => {
  describe('.getRepoInfo', () => {
    it('returns a list of repos', done => {
      let parserResults = { username: 'octocat', subject: 'repos', query: 'count' };
      var expectedResults = parserResults;
      expectedResults.repos = { name: "git-consortium", description: "This repo is for demonstration purposes only." };

      github.getRepoInfo(parserResults).then(results => {
        expect(results).toEqual(expectedResults);
        done();
      });
    });

    it('returns a list of starred repos', done => {
      let parserResults = { username: 'octocat', subject: 'starred', query: 'count' };
      var expectedResults = parserResults;
      expectedResults.repos = { name: "boysenberry-repo", description: "Testing" };

      github.getRepoInfo(parserResults).then(results => {
        expect(results).toEqual(expectedResults);
        done();
      });
    });
  });
});
