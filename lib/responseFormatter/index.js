class ResponseFormatter {
  format(response) {
    return response.results.reduce(
      (str, result) => `${str} ${result.name}: ${result.desc}\n`,
      ""
    );
  }
}

module.exports = ResponseFormatter;
