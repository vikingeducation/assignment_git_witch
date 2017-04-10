const CommandRunner = require("../src/CommandRunner");

describe("CommandRunner", () => {
  parsedObj = {
    'username': "griselda",
    'subject': "repos",
    'query': "details",
    'repos': [ {'name': 'name', 'description': 'description'}];
  }
  beforeEach(() => {
    this.runner = new CommandRunner(parsedObj);
  });

  describe("appends to object", () => {
    it("append array of objects", () => {
      const reposArr = [ {'name': 'name', 'description': 'description'}];
      let commandObj = this.runner.run(reposArr);
      expect(commandObj.repos.[1].name).toEqual('name')
    });

  });
});