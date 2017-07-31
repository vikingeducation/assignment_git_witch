class Command {
	constructor(query) {
		this.username = '';
		this.subject = '';
		this.query = query;
	}
}

Command['what'] = new Command('details');
Command['what starred'] = new Command('details');
Command['home many'] = new Command('details');

module.exports = Command;
