let Runner = require('../src/CommandRunner');
let runner = new Runner();

describe('Runner', () => {
	describe('run()', () => {
		it('returns input with repos property', done => {
			let input = { username: 'johnrpb', subject: 'repos', query: 'details' };
			expect(runner.run(input).repos.length != 0).toEqual(true);
			done();
		});
	});
});
