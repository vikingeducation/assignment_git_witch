class Command {
  constructor(userName, subject, query) {
    this.username = userName;
    this.subject = subject;
    this.query = query;
  }
  let commands = {
    'What repos': 'details',
    'How many repos': 'details',
    'What starred repos': 'details'
  }
  static getCommands = (command)=>{
    return new Command(null, null, commands[command])
  }
}

module.exports = Command;
