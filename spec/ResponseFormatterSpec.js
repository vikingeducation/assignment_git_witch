var ResponseFormatter = require('../src/ResponseFormatter');

describe('ResponseFormatter', () => {
  beforeEach(() => {
    this.formatter = new ResponseFormatter();
    this.queryObj = {
      username: "griselda",
      subject: "repos",
      query: "count",
      repos: [
        { name: 'firstRepo', description: 'Some good things' },
        { name: 'secondRepo', description: 'More good things' },
        { name: 'thirdRepo', description: "All good things" }
      ]
    };
  });

  describe('formatting based on count', () => {
    it('returns a string with the username and repo count', () => {
      var formattedString = this.formatter.format(this.queryObj);
      var expectedOutput = `griselda has 3 public repos`;
      expect(formattedString).toEqual(expectedOutput);
    });

    it('returns a string with the username and starred repo count', () => {
      this.queryObj.subject = 'starred';
      var formattedString = this.formatter.format(this.queryObj);
      var expectedOutput = `griselda has 3 starred repos`;
      expect(formattedString).toEqual(expectedOutput);
    });
  });

  describe('formatting based on details', () => {
    it('returns a string with the username and repo details', () => {
      this.queryObj.query = 'details';
      var formattedString = this.formatter.format(this.queryObj);
      var expectedOutput = `\ngriselda's public repos:\nfirstRepo - Some good things\nsecondRepo - More good things\nthirdRepo - All good things\n`;
      expect(formattedString).toEqual(expectedOutput);
    });

    it('returns a string with the username and starred repo details', () => {
      this.queryObj.query = 'details';
      this.queryObj.subject = 'starred';
      var formattedString = this.formatter.format(this.queryObj);
      var expectedOutput = `\ngriselda's starred repos:\nfirstRepo - Some good things\nsecondRepo - More good things\nthirdRepo - All good things\n`;
      expect(formattedString).toEqual(expectedOutput);
    });
  });
});
