class GitHub {
  getRepos() {
    return [
      {
        name: 'Code-Coven',
        description: 'A version control system for weird sisters'
      },
      {
        name: 'Eye-Of-Newt',
        description:
          'EON is a new frontend framework written in pure spaghetti code.'
      }
    ];
  }

  getStarredRepos() {
    return [
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
    ];
  }
}

module.exports = GitHub;
