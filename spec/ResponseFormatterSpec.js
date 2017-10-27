const ResponseFormatter = require("../src/ResponseFormatter");

describe("Response Formatter", () => {
  beforeEach(() => {
    this.responseFormatter = new ResponseFormatter();
  });

  it("returns a list of repos", done => {
    let responseObj = {
      username: "griselda",
      subject: "repos",
      query: "details",
      result: [
        {
          name: "name1",
          description: "desc1"
        },
        {
          name: "name2",
          description: "desc2"
        }
      ]
    };
    this.responseFormatter.format(responseObj).then(output => {
      expect(output).toEqual(
        "\ngriselda's repos\n" + "name1 - desc1\n" + "name2 - desc2\n"
      );
      done();
    });
  });

  it("returns the number of repos", done => {
    let responseObj = {
      username: "griselda",
      subject: "repos",
      query: "count",
      result: 2
    };
    this.responseFormatter.format(responseObj).then(output => {
      expect(output).toEqual("griselda has 2 repos");
      done();
    });
  });
});