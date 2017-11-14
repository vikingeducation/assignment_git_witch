const ResponseFormatter = require('../src/ResponseFormatter');

describe('ResponseFormatter', () => {
  beforeEach(() => {
    this.formatter = new ResponseFormatter();
  });

  it('returns a string output including repo details', () => {
    const response = {
      username: 'griselda',
      subject: 'starred repos',
      query: 'details',
      results: [
        {
          name: 'Cool-Repo',
          description: 'very cool!'
        },
        {
          name: 'Another-Repo',
          description: 'nice repo!'
        }
      ]
    };
    const output = this.formatter.format(response);
    expect(output).toEqual(
      "griselda's starred repos\nCool-Repo - very cool!\nAnother-Repo - nice repo!"
    );
  });

  it('returns a string output including repo count', () => {
    const response = {
      username: 'griselda',
      subject: 'repos',
      query: 'count',
      results: 2
    };
    const output = this.formatter.format(response);
    expect(output).toEqual('griselda has 2 public repos');
  });
});
