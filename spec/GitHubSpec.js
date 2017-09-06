const github = require('../src/GitHub');

describe('github', () => {
  beforeEach(() => {
    this.git = github();
  })

  describe('grabbing and returning username', () => {
    it('.getRepos should return promise github results object', (done) => {
      this.git.getRepos('chuckinabox').then( (body)=> {
        expect(body[0].hasOwnProperty('name')).toEqual(true);
        done();
      });
    })
  })
})
