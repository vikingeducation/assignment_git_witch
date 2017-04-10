const ResponseFormatter = require("../src/ResponseFormatter");

describe("Reponse Formatter", () => {
  let responseFormatter;
  beforeEach(() => {
    responseFormatter = new ResponseFormatter();
  });

  describe("parsing output and repos", () => {
    it("it displays a list of repos for a user", () => {
      let detailsInput = {
        username: "griselda",
        subject: "repos",
        query: "details",
        results: [
          {name: 'Repo 1', description: 'Repo 1 Description'},
          {name: 'Repo 2', description: 'Repo 2 Description'},
        ]
      }
      let output = ''
      output += `# griselda's repos\n`
      output += `# Repo 1 - Repo 1 Description`
      output += `# Repo 2 - Repo 2 Description`
      expect(responseFormatter.format(detailsInput)).toEqual(output);
    });

    it("it displays a list of starred repos for a user", () => {
      let starDetailsInput = {
        username: "griselda",
        subject: "starred repos",
        query: "details",
        results: [
          {name: 'Starred Repo 1', description: 'Repo 1 Description'},
        ]
      }
      let output = ''
      output += `# griselda's starred repos\n`
      output += `# Starred Repo 1 - Repo 1 Description`
      expect(responseFormatter.format(starDetailsInput)).toEqual(output);
    });

    it("it displays a count of repos for a user", () => {
      let countInput = {
        username: "griselda",
        subject: "repos",
        query: "count",
        results: 5
      }
      let output = ''
      output += `# the user griselda has 5 repos\n`
      expect(responseFormatter.format(countInput)).toEqual(output);
    });

    it("it displays a count of starred repos for a user", () => {
      let starCountInput = {
        username: "griselda",
        subject: "starred repos",
        query: "count",
        results: 2
      }
      let output = ''
      output += `# the user griselda has 2 starred repos\n`
      expect(responseFormatter.format(starCountInput)).toEqual(output);
    });

  });

});
