class GitHub {
  getRepos() {
    return [
      {
        name: "Code-Coven",
        description: "A version control system for weird sisters"
      },
      {
        name: "Eye-Of-Newt",
        description: "EON is a new frontend framework written in pure spaghetti code."
      }
    ];
  }

  getStarredRepos() {
    return [];
  }
}

module.exports = GitHub;