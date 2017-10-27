let sampleRepoResponse = [
  {name: 'Code-Coven', description: 'A version control system for weird sisters'},
  {name: 'Eye-Of-Newt', description: 'EON is a new frontend framework written in pure spaghetti code.'}
];

let sampleStarredResponse = [
  {name: 'Mocking-Birds', description: 'An application for the asynchronous ornithologist'}
];

class GitHub {
  constructor() {}

  getRepos(username) {
		return sampleRepoResponse;
	}

	getStarredRepos(username) {
		return sampleStarredResponse;
	}

}

module.exports = GitHub;
