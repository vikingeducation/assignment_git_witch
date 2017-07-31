const GitWitch = require('../lib/gitWitch');
const QuestionParser = require('../lib/questionParser');
const CommandRunner = require('../lib/commandRunner');
const Command = require('../lib/commandRunner/command');
const ResponseFormatter = require('../lib/responseFormatter');

describe('GitWitch', () => {
	beforeEach(() => {
		this.parser = new QuestionParser();
		this.runner = new CommandRunner();
		this.formatter = new ResponseFormatter();

		this.command = this.parser.parse('what repos does griselda have?');
		this.response = this.runner.run(this.command);
		this.output = this.formatter.format(this.response);

		spyOn(this.parser, 'parse').andReturn(this.command);
		spyOn(this.runner, 'run').andReturn(Promise.resolve(this.response));
		spyOn(this.formatter, 'format').andReturn(this.output);

		this.witch = new GitWitch({
			parser: this.parser,
			runner: this.runner,
			formatter: this.formatter
		});
	});

	it('processes a question and returns a formatted response', done => {
		const input = 'how many repos does griselda have?';
		this.witch.process(input).then(output => {
			expect(this.parser.parse).toHaveBeenCalledWith(input);
			expect(this.runner.run).toHaveBeenCalledWith(this.command);
			expect(this.formatter.format).toHaveBeenCalledWith(this.response);
			expect(output).toEqual(this.output);
			done();
		});
	});
});
