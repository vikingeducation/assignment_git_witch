const CommandRunner = require("../src/CommandRunner.js");

describe("CommandRunner", () => {
  //mock an api call
  //input is from questionparser object
  //{username, subject(details/count), query(repos/starred repos)}

  //return from api call
  //{username, subject, query, repos:[]}

  describe("getting starred repos", () => {
    beforeEach(() => {
      this.validInput = {
        username: "SamuelLangenfeld",
        subject: "count",
        query: "starred repos"
      };

      this.commandRunner = new CommandRunner();
    });

    it("retrieves starred repos for valid user", done => {
      this.commandRunner.run(this.validInput).then(returnObj => {
        expect(returnObj.repos.length).toBeGreaterThan(1);
      });
      done();
    });

    it("returns error for starred repos for invalid user", done => {
      this.commandRunner.run(this.validInput).then(returnObj => {
        expect(
          returnObj.repos.find(obj => {
            obj.name === "bootstrap";
          })
        ).toBeTruthy();
      });
      done();
    });

    describe("get all user repos", () => {
      beforeEach(() => {
        this.validInput = {
          username: "SamuelLangenfeld",
          subject: "count",
          query: "repos"
        };

        this.commandRunner = new CommandRunner();
      });

      it("gets all user repos", done => {
        this.commandRunner.run(this.validInput).then(returnObj => {
          expect(returnObj.repos.length).toBeGreaterThan(50);
        });

        done();
      });

      it("and returns a known repo", done => {
        this.commandRunner.run(this.validInput).then(returnObj => {
          expect(
            returnObj.repos.find(obj => {
              obj.name === "assignment_git_witch";
            })
          ).toBeTruthy();
        });
        done();
      });
    });
  });
});
