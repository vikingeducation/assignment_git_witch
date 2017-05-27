class ResponseFormatter {
  format(input) {
    if (input.query === "count") {
      let formattedRepo = input.results === 1 ? "repo" : "repos";

      if (input.subject === "repos") {
        return `${ input.username } has ${ input.results } public ${ formattedRepo }`;
      } else if (input.subject === "starred repos") {
        return `${ input.username } has ${ input.results } starred ${ formattedRepo }`;
      }
    } else if (input.query === "details") {
      return this._formatDetails(input);
    }
  }
  _formatDetails(input) {
    let repoType = input.subject === "repos" ? "public repos" : "starred repos";
    let message = `${ input.username }'s ${ repoType }`;
    input.results.forEach(result => {
      message += `\n${ result.name } - ${ result.description }`;
    });

    return message;
  }
}

module.exports = ResponseFormatter;