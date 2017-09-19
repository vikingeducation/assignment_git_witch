const Github = require("../src/Github");

describe("Github wrapper", () => {
  beforeEach(() => {
    this.gitHub = {
      authenticate() {}
    };

    this.response = "response";

    spyOn(this.gitHub, "authenticate").andReturn(
      Promise.resolve(this.response)
    );

    this.gitHub = Github(this.gitHub);
  });

  it("authenticates before each request", done => {
    this.gitHub
      .getRepos("Brunhilda")
      .then(this.gitHub.authenticate)
      .toHaveBeenCalled();

    this.gitHub
      .countRepos("Brunhilda")
      .then(this.gitHub.authenticate)
      .toHaveBeenCalled();

    this.gitHub
      .getStarred("Brunhilda")
      .then(this.gitHub.authenticate)
      .toHaveBeenCalled();

    this.gitHub
      .countStarred("Brunhilda")
      .then(this.gitHub.authenticate)
      .toHaveBeenCalled();

    done();
  });
});
