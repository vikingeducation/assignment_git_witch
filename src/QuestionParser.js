class QuestionParser {

  constructor() {}

  // Example input:
  // "how many repos does griselda have?"
  // "what repos does griselda have?"
  // "how many starred repos does griselda have?"
  // "what starred repos does griselda have?"

  parse(input) {
    let command = {};

    command.username = this.getUser(input);
    command.subject = this.getSubject(input);
    command.query = this.getQuery(input);

    return command;
  }

  // username is always the second to last word
  getUser(input) {
    let inputArray = input.split(' ');

    return inputArray[inputArray.length - 2];
  }

  // choices are 'repos' or 'starred repos'
  // since 'repos' are in both , make that default
  // and change if 'starred repos' is in input
  getSubject(input) {
    let subject = 'repos';

    if (input.includes('starred repos')) subject = "starred repos";
    return subject;
  }

  // first word determines the query
  getQuery(input) {
    let inputArray = input.split(' ');

    if (inputArray[0] === 'how') return 'count';
    else if (inputArray[0] === 'what') return 'details';
  }

}

module.exports = QuestionParser;