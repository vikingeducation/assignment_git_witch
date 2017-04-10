class QuestionParser {
  parse(command) {
    let username, subject, query;
    query = (command.slice(0, 4) === 'what') ? 'details' : 'count';
    let splitCmd = command.split(" ");
    username = splitCmd[splitCmd.length - 2];
    subject = splitCmd.includes('starred') ? 'stars' : 'repos';

    return { username, subject, query };
  }
}

module.exports = QuestionParser;
