class QuestionParser {
  parse(question) {
    let words = question.split(" ");
    let doesIndex = words.indexOf("does");
    let username = words[doesIndex + 1];
    let subject;
    if (words.includes("starred")) {
      subject = "starred repos";
    } else {
      subject = "repos";
    }

    let query;
    if (words.includes("many")) {
      query = "count";
    } else {
      query = "details";
    }

    return {
      username,
      subject,
      query
    };
  }
}

module.exports = QuestionParser;