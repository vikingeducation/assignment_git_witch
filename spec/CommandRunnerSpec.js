const CommandRunner = require("../src/CommandRunner");

describe("CommandRunner", () => {
  beforeEach(() => {
    this.CommandRunner = new CommandRunner({
      query: "details",
      subject: "repos",
      username: "IDHalverson"
    });
  });

  describe("Getting info from GitHub", () => {
    it("recieves info from GitHub", done => {
      this.CommandRunner.run().then(results => {
        //console.log(results);
        expect(results[0].id).toBeTruthy();
        expect(results[0].full_name).toBeTruthy();
        expect(results[0].description).toBeTruthy();
      });
    });
  });
});
