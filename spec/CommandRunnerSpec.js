const CommandRunner = require("../src/CommandRunner");

xdescribe("CommandRunner", () => {
  beforeEach(() => {
    const githubObj = [{ name: "name", description: "description" }];
    this.runner = new CommandRunner(githubObj);

    const commandObj = {
      username: "griselda",
      subject: "repos",
      query: "details"
    };
  });

  describe("appends to object", () => {
    it("append array of objects", () => {
      //let outputObj = this.runner.run(commandObj);
      let outputObj = this.runner.run(commandObj);
      expect(outputObj.repos[0].name).toEqual("name");
    });
  });
});
