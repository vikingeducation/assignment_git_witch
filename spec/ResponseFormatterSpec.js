const ResponseFormatter = require("../lib/responseFormatter");

describe("Response Formatter", () => {
  beforeEach(() => {
    this.responseFormatter = new ResponseFormatter();
  });

  it("receives and formats a response from the command runner", () => {
    let response = {
      command: { testCommand: true },
      results: [
        { name: "foo", desc: "bar1" },
        { name: "bar", desc: "foo2" },
        { name: "foobar", desc: "bar3" },
        { name: "barfoo", desc: "badr4" },
        { name: "fubar", desc: "ba5r" },
        { name: "Jake", desc: "b6ar" }
      ]
    };

    let formattedResult = this.responseFormatter.format(response);
    expect(typeof formattedResult !== "string").toBe(false);
  });
});
