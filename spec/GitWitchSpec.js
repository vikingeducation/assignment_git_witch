const GitWitch = require("../src/GitWitch");

describe("GitWitch", () => {
  beforeEach(() => {
    this.parser = { parse(a) {} };
    this.runner = { run(b) {} };
    this.formatter = { format(c) {} };

    this.command = "command";
    this.response = "response";
    this.output = "output";

    spyOn(this.parser, "parse").and.returnValue(this.command);
    spyOn(this.runner, "run").and.returnValue(this.response);
    spyOn(this.formatter, "format").and.returnValue(this.output);

    this.witch = new GitWitch({
      parser: this.parser,
      runner: this.runner,
      formatter: this.formatter
    });
  });

  it("processes a question and returns a formatted response", done => {
    const input = "how many repos does griselda have?";
    this.witch.process(input).then(output => {
      expect(this.parser.parse).toHaveBeenCalledWith(input);
      expect(this.runner.run).toHaveBeenCalledWith(this.command);
      expect(this.formatter.format).toHaveBeenCalledWith(this.response);
      expect(output).toEqual(this.output);
      done();
    });
  });
});
