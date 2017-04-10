const ResponseFormatter = require("../src/ResponseFormatter");

describe("Reponse Formatter", () => {
  let detailsInput, countInput, starDetailsInput, starCountInput, responseFormatter;

  beforeEach(() => {
    detailsInput = {
      username: "griselda",
      subject: "repos",
      query: "details",
      results: [
        {name: 'Repo 1', description: 'Repo 1 Description'},
        {name: 'Repo 2', description: 'Repo 2 Description'},
      ]
    }

    starDetailsInput = {
      username: "griselda",
      subject: "starred repos",
      query: "details",
      results: [
        {name: 'Starred Repo 1', description: 'Repo 1 Description'},
      ]
    }

    countInput = {
      username: "griselda",
      subject: "repos",
      query: "details",
      results: 5
    }

    starCountInput = {
      username: "griselda",
      subject: "starred repos",
      query: "details",
      results: 2
    }

    responseFormatter = new ResponseFormatter();

  });

  describe("parsing output and repos", () => {
    it("it displays a list of repos for a user", () => {
      let output = ''
      output += `# griselda's repos\n`
      output += `# Repo 1 - Repo 1 Description`
      output += `# Repo 2 - Repo 2 Description`
      expect(responseFormatter.format(detailsInput)).toEqual(output);
    });

    it("it displays a list of starred repos for a user", () => {
      let output = ''
      output += `# griselda's starred repos\n`
      output += `# Starred Repo 1 - Repo 1 Description`
      expect(responseFormatter.format(starDetailsInput)).toEqual(output);
    });

    it("it displays a count of repos for a user", () => {
      let output = ''
      output += `# the user griselda has 5 public repos`
      expect(responseFormatter.format(countInput)).toEqual(output);
    });

    it("it displays a count of starred repos for a user", () => {
      let output = ''
      output += `# the user griselda has 2 public repos`
      expect(responseFormatter.format(starCountInput)).toEqual(output);
    });



  });

});
