class QuestionParser {
  constructor() {}

  parse(question) {
    let nameSetter = question => {
      let usernameArr = question.split(" ");
      return usernameArr[usernameArr.length - 2];
    };

    let questionObj = {
      username: nameSetter(question)
    };

    let containsObj = {
      repos: () => (questionObj.subject = "repos"),
      starred: () => (questionObj.subject = "starred repos"),
      what: () => (questionObj.query = "details"),
      "how many": () => (questionObj.query = "count")
    };

    for (let key in containsObj) {
      if (question.includes(key)) {
        containsObj[key]();
      }
    }

    return questionObj;
  }
}

module.exports = QuestionParser;
