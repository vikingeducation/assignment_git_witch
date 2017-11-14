function _formatResults(results) {
  let repoString = '';
  results.forEach(result => {
    repoString = repoString + result.name + ' - ' + result.description + '\n';
  });
  repoString = repoString.substr(0, repoString.length - 1);
  return repoString;
}

class ResponseFormatter {
  format(response) {
    let output;
    if (response.query === 'count') {
      if (response.subject === 'repos') {
        output = `${response.username} has ${response.results} public repos`;
      } else if (response.subject === 'starred repos') {
        output = `the user ${response.username} has ${response.results} starred repo(s)`;
      }
    } else if (response.query === 'details') {
      const repoString = _formatResults(response.results);
      if (response.subject === 'repos') {
        output = `\n${response.username}'s public repos\n${repoString}`;
      } else if (response.subject === 'starred repos') {
        output = `${response.username}'s starred repos\n${repoString}`;
      }
    }
    return output;
  }
}

module.exports = ResponseFormatter;
