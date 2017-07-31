const Github = require("./Github");

describe("Github wrapper", () => {
  beforeEach(() => {
    this.gitHub = {
      authenticate() {},
      // list of users starred repos
      getStarredReposForUser() {},
      repos: {
        // get list of repos
        getForUser() {}
      },
      users: {
        // get the number of repos
        getForUser() {}
      }
    };
    this.response = "response";

    spyOn(this.gitHub, "authenticate").andReturn(
      Promise.resolve(this.response)
    );
    spyOn(this.gitHub, "getStarredReposForUser").andReturn(
      Promise.resolve(this.response)
    );
    spyOn(this.github.repos, "getForUser").andReturn(
      Promise.resolve(this.response)
    );
    spyOn(this.github.users, "getForUser").andReturn(
      Promise.resolve(this.response)
    );

    this.gitHub = Github(this.gitHub);
  });

  it("authenticates before each request", done => {
    this.gitHub({
      query: "details",
      subject: "repos",
      username: "Brunhilda"
    })
      .then(this.gitHub.authenticate)
      .toHaveBeenCalled();
  });
  // authenticate(), getRepos(), getStarredReposForUser()
});
