const ResponseFormatter = require("../src/ResponseFormatter");

describe("ResponseFormatter", () => {
  beforeEach(() => {
    this.responseFormatter = new ResponseFormatter();
  });

  it("returns a string with the listed repos when subject is 'repos' and query is 'details'", () => {
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
    expect(this.responseFormatter.format(responseObj)).toEqual(
      "griselda's repos:\n" + "name1 - desc1\n" + "name2 - desc2\n"
    );
  });

  it("returns a string with the number of repos when subject is 'repos' and query is 'count'", () => {
    let responseObj = {
      username: "griselda",
      subject: "repos",
      query: "count",
      result: 2
    };
    expect(this.responseFormatter.format(responseObj)).toEqual(
      "the user griselda has 2 repos"
    );
  });

  it("returns a string with the listed starred repos when subject is 'stars' and query is 'details'", () => {
    let responseObj = {
      username: "griselda",
      subject: "stars",
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
    expect(this.responseFormatter.format(responseObj)).toEqual(
      "griselda's stars:\n" + "name1 - desc1\n" + "name2 - desc2\n"
    );
  });

  it("returns a string with the number of repos when subject is 'stars' and query is 'count'", () => {
    let responseObj = {
      username: "griselda",
      subject: "stars",
      query: "count",
      result: 2
    };
    expect(this.responseFormatter.format(responseObj)).toEqual(
      "the user griselda has 2 stars"
    );
  });
});
