class Command {
	constructor(query) {
		this.username = '';
		this.subject = '';
		this.query = query;
	}
}

Command['what'] = new Command('getAll');
Command['what starred'] = new Command('getStarred');
Command['how many'] = new Command('getCount');

module.exports = Command;
