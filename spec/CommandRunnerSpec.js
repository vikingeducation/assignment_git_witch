const CommandRunner = require("../src/CommandRunner");

describe("CommandRunner", () => {
	beforeEach(() => {
		this.runner = { run() {} };
		this.response = "response";

		this.gitHub = {
			getRepos() {},
			countRepos() {},
			getStarred() {},
			countStarred() {}
		};

		spyOn(this.runner, "run").andReturn(Promise.resolve(this.response));

		this.witch = new GitWitch({
			runner: this.runner
		});
	});

	it("calls GithubWrapper and returns the response", () => {
		expect(this.runner).toHaveBeenCalledWith();
	});
});
