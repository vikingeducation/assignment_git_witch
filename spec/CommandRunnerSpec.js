const CommandRunner = require('../src/CommandRunner');

describe('CommandRunner', () => {
  beforeEach(() => {
    this.gitHub = {
      getRepos() {},
      getStarredRepos() {}
    };

    this.repos = 'repos';
    this.starredRepos = 'starred repos';

    spyOn(this.gitHub, 'getRepos').andReturn(Promise.resolve(this.repos));
    spyOn(this.gitHub, 'getStarredRepos').andReturn(
      Promise.resolve(this.starredRepos)
    );

    this.gitHub.getRepos('griselda');
    this.gitHub.getStarredRepos('griselda');
    this.runner = new CommandRunner(this.gitHub);
  });

  it('returns a response object including array of repo details', done => {
    const command = {
      username: 'griselda',
      subject: 'repos',
      query: 'details'
    };
    this.runner.run(command).then(response => {
      expect(this.gitHub.getRepos).toHaveBeenCalledWith(command.username);
      expect(response.results).toEqual([
        {
          name: 'Code-Coven',
          description: 'A version control system for weird sisters'
        },
        {
          name: 'Eye-Of-Newt',
          description:
            'EON is a new frontend framework written in pure spaghetti code.'
        }
      ]);
      done();
    });
  });

  it('returns a response object including repo count', done => {
    const command = {
      username: 'griselda',
      subject: 'repos',
      query: 'count'
    };
    this.runner.run(command).then(response => {
      expect(this.gitHub.getRepos).toHaveBeenCalledWith(command.username);
      expect(response.results).toEqual(2);
      done();
    });
  });

  it('returns a response object including array of starred repo details', done => {
    const command = {
      username: 'griselda',
      subject: 'starred repos',
      query: 'details'
    };
    this.runner.run(command).then(response => {
      expect(this.gitHub.getStarredRepos).toHaveBeenCalledWith(
        command.username
      );
      expect(response.results).toEqual([
        {
          name: 'tidyverse / broom',
          description:
            'Convert statistical analysis objects from R into tidy format'
        },
        {
          name: 'emacs-evil / evil',
          description: 'The extensible vi layer for Emacs.'
        },
        {
          name: 'Cirrus-Minor / witchblast',
          description: 'Roguelite dungeon crawler game'
        }
      ]);
      done();
    });
  });

  it('returns a response object including starred repo count', done => {
    const command = {
      username: 'griselda',
      subject: 'starred repos',
      query: 'count'
    };
    this.runner.run(command).then(response => {
      expect(this.gitHub.getStarredRepos).toHaveBeenCalledWith(
        command.username
      );
      expect(response.results).toEqual(3);
      done();
    });
  });
});
