const CommandRunner = require('../src/CommandRunner');

describe('CommandRunner', () => {
  beforeEach(() => {
    this.github = { query() {} };

    spyOn(this.github, 'query').andReturn(
      Promise.resolve([
        {
          name: 'test repo',
          description: 'a fake test repo'
        }
      ])
    );

    this.runner = new CommandRunner(this.github);
  });

  it('processes a parsed question object and returns a response', done => {
    const question = {
      username: 'griselda',
      subject: 'repos',
      query: 'count'
    };
    this.runner.run(question).then(output => {
      console.log(output);
      expect(this.github.query).toHaveBeenCalledWith(question);
      done();
    });
  });
});
