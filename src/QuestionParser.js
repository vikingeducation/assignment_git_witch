class QuestionParser {
  constructor() {

  }

  parse(question) {
    let splitQuestion = question.split(" ");
    
    let getSubject = (splitQuestion) => {
      let subject = splitQuestion[splitQuestion.indexOf("does")-1];
      let precedingWord = splitQuestion[splitQuestion.indexOf("does")-2];
      if (precedingWord  === "starred") {
        return precedingWord + " " + subject; 
      } else {
        return subject;
      }
    }
   
    return {
      username: splitQuestion[splitQuestion.length - 2],
      subject: getSubject(splitQuestion), 
      query: splitQuestion[0] === "how" ? "count" : "details"
    };
  }
}

module.exports = QuestionParser;
