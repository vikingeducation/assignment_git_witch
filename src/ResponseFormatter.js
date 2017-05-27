class ResponseFormatter {
  format(input) {
    if (input.query === "count") {
      let formattedRepo = input.results === 1 ? "repo" : "repos";
      return `${ input.username } has ${ input.results } public ${ formattedRepo }`;
    } else if (input.query === "details") {
      return this._formatDetails(input);
    }
  }
  _formatDetails(input) {
    let message = `${ input.username }'s public repos`;
    input.results.forEach(result => {
      message += `\n${ result.name } - ${ result.description }`;
    });

    return message;
  }
}

module.exports = ResponseFormatter;