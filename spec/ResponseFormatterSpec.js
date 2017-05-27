const ResponseFormatter = require("../src/ResponseFormatter");

/* This module should take a response object (like those returned by the 
CommandRunner) and return a string output. This string should be the response 
that will be output to the command line. See the example output above, right 
beneath the Your Task header. Just like the QuestionParser, this module has no 
collaborators and should be quite simple to test.
*/
describe("ResponseFormatter", () => {
  beforeEach(() => {
    this.input = {
      username: "griselde",
      subject: "repos",
      results: [
        {
          name: "Code-Coven",
          description: "A version control system for weird sisters"
        },
        {
          name: "Eye-Of-Newt",
          description: "EON is a new frontend framework written in pure spaghetti code."
        }
      ]
    };

    this.formatter = new ResponseFormatter();
  });

  it("should return details query properly formatted", () => {
    this.input.query = "details";
    const expected = `griselde's public repos\nCode-Coven - A version control system for weird sisters\nEye-Of-Newt - EON is a new frontend framework written in pure spaghetti code.`;

    expect(this.formatter.format(this.input)).toEqual(expected);
  });

  it("should return counts query properly formatted", () => {
    this.input.query = "count";
    this.input.results = 2;
    const expected = "griselde has 2 public repos";

    expect(this.formatter.format(this.input)).toEqual(expected);
  });

  it("should properly format grammar when only 1 repo", () => {
    this.input.query = "count";
    this.input.results = 1;
    const expected = "griselde has 1 public repo";

    expect(this.formatter.format(this.input)).toEqual(expected);
  });

});