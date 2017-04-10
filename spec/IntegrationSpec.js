const exec = require("child_process").exec;

// When you're ready to test your entire application. Change 'xdescribe` to 'describe'.
xdescribe("An Integration Test", () => {
  it("works for details", done => {
    const expectedOutput = `
griselde's public repos
Code-Coven - A version control system for weird sisters
Eye-Of-Newt - EON is a new frontend framework written in pure spaghetti code.
`;

    exec(
      "node ./src/GitWitchCli.js what repos does griselde have?",
      (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        expect(stdout).toEqual(expectedOutput);
        done();
      }
    );
  });

  it("works for counts", done => {
    const expectedOutput = `griselde has 2 public repos
`;

    exec(
      "node ./src/GitWitchCli.js how many repos does griselde have?",
      (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        expect(stdout).toEqual(expectedOutput);
        done();
      }
    );
  });
});
