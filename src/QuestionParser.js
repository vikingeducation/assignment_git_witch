class QuestionParser {
  parse(question) {
    var results = {};
    var questionArray = question.split(' ');

    // parse username
    results.username = questionArray[questionArray.indexOf('does') + 1];
    // parse subject
    results.subject = question.indexOf('star') !== -1 ? 'starred' : 'repos';
    // parse query
    results.query = question.startsWith('what') ? 'details' : 'count';

    return results;
  }
}

module.exports = QuestionParser;
