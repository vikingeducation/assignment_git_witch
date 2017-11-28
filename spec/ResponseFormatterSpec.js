const ResponseFormatter = require('../src/ResponseFormatter.js');

describe('ResponseFormatter', () => {

  beforeEach(() => {
    this.validInput = {
      username: 'User',
      subject: 'details',
      query: 'repos',
      repos: [
        { name: 'First Repo', description: 'The first one' },
        { name: 'Second Repo', description: 'The second one' }
      ]
    };
    this.responseFormatter = new ResponseFormatter();
  });

  it('returns a string', () => {
    expect(typeof this.responseFormatter.format(this.validInput)).toEqual('string');
  });

  it('returns the right string', () => {
    expect(this.responseFormatter.format(this.validInput)).toEqual("User's repos:\nname: First Repo description: The first one\nname: Second Repo description: The second one");
  })
})