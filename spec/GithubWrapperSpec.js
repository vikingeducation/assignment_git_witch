const GithubWrapper = require('../src/GithubWrapper');


describe("Github Wrapper", () => {
  let repoKeys, github, username;
  beforeEach(() => {
    github = new GithubWrapper();
    repoKeys = ['name', 'description'];
    username = 'tim5046';
  });

  it("should query for repos and return the proper keys", done => {
    github.getRepos({username}).then((result) => {
      result = result.data;
      let firstRepo = result[0];
      expect(firstRepo.name).toBeDefined();
      expect(firstRepo.description).toBeDefined();
      expect(Object.keys(firstRepo).length).toEqual(2);
      done();
    })

  });

  it("should query for starred repos and return the proper keys", done => {
    github.getStarredRepos({username}).then((result) => {
      result = result.data;
      let firstRepo = result[0];
      expect(firstRepo.name).toBeDefined();
      expect(firstRepo.description).toBeDefined();
      console.log("\n\n\n\n\n\nRESULT:",result)
      expect(Object.keys(firstRepo).length).toEqual(2);
      done();
    })

  });
});
