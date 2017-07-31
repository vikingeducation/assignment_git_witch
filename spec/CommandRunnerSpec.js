const CommandRunner = require("../src/CommandRunner");


describe("CommandRunner", () => {
  beforeEach(() => {
    this.runner = new CommandRunner(mock);
  });

  describe("parsing usernames", () => {
    it("parses simple usernames", () => {
      const response = this.runner.run(question);
      expect(response).toBeTruthy();
    });
  }
}
