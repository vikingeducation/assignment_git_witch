class QuestionParser {
  parse(question) {
    const words = question.split(' ');
    const command = {};

    if (/what/.test(words)) {
      command.query = 'details';
    } else {
      command.query = 'count';
    }

    if (/starred/.test(words)) {
      command.subject = 'starred repos';
    } else {
      command.subject = 'repos';
    }

    words.forEach((word, i) => {
      if (word === 'does') {
        command.username = words[i + 1];
      }
    });
    return command;
  }
}

module.exports = QuestionParser;
