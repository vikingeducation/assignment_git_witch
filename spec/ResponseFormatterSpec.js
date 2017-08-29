const ResponseFormatter = require('../src/ResponseFormatter');

describe('ResponseFormatter', () => {
  beforeEach(() => {
    this.formatter = new ResponseFormatter();
  });

  describe('formats count query responses', () => {
    it('formats a response with multiple repos', () => {
      const response = {
        username: 'griselda',
        subject: 'repos',
        query: 'count',
        result: [
          { name: 'test repo', description: 'a first test repo' },
          { name: 'second repo', description: 'another test repo' }
        ]
      };
      const expectedResponse = `the user griselda has 2 public repos`;
      let formattedResponse = this.formatter.format(response);
      expect(formattedResponse).toEqual(expectedResponse);
    });
  });

  describe('formats details query responses', () => {
    it('formats a response with details for multiple repos', () => {
      const response = {
        username: 'griselda',
        subject: 'starred repos',
        query: 'details',
        result: [
          { name: 'test repo', description: 'a first test repo' },
          { name: 'second repo', description: 'another test repo' }
        ]
      };
      const expectedResponse = `griselda's starred repos
test repo - a first test repo
second repo - another test repo
`;
      let formattedResponse = this.formatter.format(response);
      expect(formattedResponse).toEqual(expectedResponse);
    });
  });
});
