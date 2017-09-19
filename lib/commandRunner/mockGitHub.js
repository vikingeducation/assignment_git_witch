class GitHubApi {
	constructor() {
		this._repoCount = 0;
		this.repos = {
			getAll: options => {
				return [
					{ name: 'foo', desc: 'bar1' },
					{ name: 'bar', desc: 'foo2' },
					{ name: 'foobar', desc: 'bar3' },
					{ name: 'barfoo', desc: 'badr4' },
					{ name: 'fubar', desc: 'ba5r' },
					{ name: 'Jake', desc: 'b6ar' }
				];
				this.repoCount = 6;
			},
			getCount: () => this._repoCount
		};
		this.activity = {
			getStarredRepos: options => {
				return [
					{ name: 'foo', desc: 'b6fdsfar' },
					{ name: 'bar', desc: 'b6sdfdsfdsfar' },
					{ name: 'foobar', desc: 'b6asdfsdfsdfsdfdsfr' }
				];
			}
		};
	}
}

module.exports = GitHubApi;
