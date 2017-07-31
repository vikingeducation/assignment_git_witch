class GitHubApi {
	constructor() {
		this._repoCount = 0;
		this.repos = {
			getAll: options => {
				return [
					{ name: 'foo' },
					{ name: 'bar' },
					{ name: 'foobar' },
					{ name: 'barfoo' },
					{ name: 'fubar' },
					{ name: 'Jake' }
				];
				this.repoCount = 6;
			},
			getCount: () => this._repoCount
		};
	}
}

module.exports = GitHubApi;
