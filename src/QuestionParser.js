
class QuestionParser {

  parse(input) {
    let userMatch = /does\s+(\w*)\s+have/;
    let username = userMatch.exec(input)[1];
    let subjectMatch = /what\s+(\w*\s*\w)\s+does/;
    // repos or starred repos
    let subject = subjectMatch.exec(input)[1];
    console.log("Repos Match: ", subject);
    return {
      username: username
    }


  }

}

module.exports = QuestionParser;