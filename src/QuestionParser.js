class QuestionParser {
  parse(string) {
    let username, subject, query;
    query = string.slice(0, 4) === "what" ? "details" : "count";
    let splitCmd = string.split(" ");
    username = splitCmd[splitCmd.length - 2];
    subject = splitCmd.includes("starred") ? "stars" : "repos";

    return { username, subject, query };
  }
}

module.exports = QuestionParser;
