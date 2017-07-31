// const github =

// this.gitHub = {
//       authenticate() {},
//       // list of users starred repos
//       getStarredReposForUser() {},
//       repos: {
//         // get list of repos
//         getForUser() {}
//       },
//       users: {
//         // get the number of repos
//         getForUser() {}
//       }
//     };
//     this.response = "response";

//     spyOn(this.gitHub, "authenticate").andReturn(
//       Promise.resolve(this.response)
//     );
//     spyOn(this.gitHub, "getStarredReposForUser").andReturn(
//       Promise.resolve(this.response)
//     );
//     spyOn(this.github.repos, "getForUser").andReturn(
//       Promise.resolve(this.response)
//     );
//     spyOn(this.github.users, "getForUser").andReturn(
//       Promise.resolve(this.response)
//     );

//     this.gitHub = Github(this.gitHub);
//   });

let Github = githubObj => {
	return {
		github: githubObj || require("github"),

		getRepos: username => {
			this.github.authenticate();
			return Promise.resolve("response");
		},
		countRepos: username => {
			return Promise.resolve("response");
		},
		getStarred: username => {
			return Promise.resolve("response");
		},
		countStarred: username => {
			return Promise.resolve("response");
		}
	};
};

module.exports = Github;
