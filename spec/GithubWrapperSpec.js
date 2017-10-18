const GithubApi = require('../src/GithubWrapper');
const github = new GithubApi();

describe('GithubWrapper', () => {
  describe('.getRepoInfo', () => {
    it('returns a list of repos', done => {
      github.getRepoInfo('octocat', 'repos').then(results => {
        expect(results[0]).toEqual({ name: "git-consortium", description: "This repo is for demonstration purposes only." });
        done();
      });
    });

    it('returns a list of starred repos', done => {
      github.getRepoInfo('octocat', 'starred').then(results => {
        expect(results[0]).toEqual({ name: "boysenberry-repo", description: "Testing" });
        done();
      });
    });
  });
});
