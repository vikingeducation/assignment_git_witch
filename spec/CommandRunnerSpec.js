const CommandRunner = require("../lib/commandRunner");
const MockGitHubApi = require('./mockGitHub');

describe('Command Runner'() =>{
  beforeEach(() => {
    this.commandRunner = new CommanRunner(MockGitHubApi)
  });
  it('it runs a command'){}
})
