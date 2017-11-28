const CommandRunner = require('../src/CommandRunner.js');

describe("CommandRunner", () => {

  //mock an api call
  //input is from questionparser object
  //{username, subject(details/count), query(repos/starred repos)}


  //return from api call
  //{username, subject, query, repos:[]}

  beforeEach(() => {
    this.validInput = {
      username: 'SamuelLangenfeld',
      subject: 'count',
      query: 'starred repos'
    }

    this.commandRunner = new CommandRunner();
  });
  describe("getting starred repos", () => {
    it('retrieves starred repos for valid user', done => {
      expect(this.commandRunner.run(this.validInput).repos.length).toBeGreaterThan(1);
      done();
    });

    it('returns error for starred repos for invalid user', done => {
      done();
    });

  });


});