const GithubWrapper = require('../src/GithubWrapper');


describe("Github Wrapper", () => {
  let repoKeys, github, username;
  beforeEach(() => {
    github = new GithubWrapper();
    repoKeys = ['name', 'description'];
    username = 'eriktrautman';
  });

  it("should query for repos and return the proper keys", done => {
    github.getRepos({username}).then((result) => {
      let firstRepo = result[0];
      expect(firstRepo.name).toBeDefined();
      expect(firstRepo.description).toBeDefined();
      expect(Object.keys(firstRepo).length).toEqual(2);
      done();
    })

  });

  it("should query for starred repos and return the proper keys", done => {
    github.getStarredRepos({username}).then((result) => {
      let firstRepo = result[0];
      expect(firstRepo.name).toBeDefined();
      expect(firstRepo.description).toBeDefined();
      expect(Object.keys(firstRepo).length).toEqual(2);
      done();
    })
  });

  it("should query for starred repos and return the proper keys", done => {
    github.getStarredRepos({username: "tim5046"}).then((result) => {
      expect(result).toEqual([]);
      done();
    })
  });  



});
