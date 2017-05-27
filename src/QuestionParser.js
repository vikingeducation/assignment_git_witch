class QuestionParser {
  parse(question) {
    let username = this._parseUsername(question);
    let subject = this._parseSubject(question);
    let query = this._parseQuery(question);

    let command = {
      subject: subject,
      username: username,
      query: query
    };
    return command;
  }

  _parseUsername(question) {
    let usernameRegex = /does (.*?) have/gi;
    let username = usernameRegex.exec(question);
    return username[1];
  }

  _parseSubject(question) {
    let subjectRegex = /what (.*?) does/gi;
    let subject = subjectRegex.exec(question);
    if (!subject) {
      subjectRegex = /how many (.*?) does/gi;
      subject = subjectRegex.exec(question);
    }
    return subject[1];
  }
  
  _parseQuery(question) {
    let questionSegments = question.split(' ');
    let query;
    if (questionSegments[0] === "what") {
      query = "details";
    } else if (questionSegments[0] === "how" && questionSegments[1] === "many") {
      query = "count";
    }

    return query;
  }
}

module.exports = QuestionParser;