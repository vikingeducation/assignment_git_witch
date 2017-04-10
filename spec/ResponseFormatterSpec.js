const ResponseFormatter = require("../src/ResponseFormatter");

describe("ResponseFormatter", () => {
  beforeEach(() => {
    this.responseFormatter = new ResponseFormatter();
  });

  it("returns a string with the listed repos when subject is 'repo' and query is 'details'", done => {
    let responseObj = Promise.resolve({
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
    });
    this.responseFormatter.format(responseObj).then(output => {
      expect(output).toEqual(
        "griselda's repos:\n" + "name1 - desc1\n" + "name2 - desc2\n"
      );
      done();
    });
  });

  it("returns a string with the listed repos when subject is 'repo' and query is 'count'", done => {
    let responseObj = Promise.resolve({
      username: "griselda",
      subject: "repos",
      query: "count",
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
    });
    this.responseFormatter.format(responseObj).then(output => {
      expect(output).toEqual("the user griselda has 2 repos");
      done();
    });
  });
});
