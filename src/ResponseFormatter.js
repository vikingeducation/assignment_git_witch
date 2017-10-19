class ResponseFormatter {
  format(input) {
    var username = input.username;
    var subject = input.subject === 'repos' ? 'public' : 'starred';
    var query = input.query;
    var repos = input.repos;

    if (query === 'count') {
      return `${ username } has ${ repos.length } ${ subject } repos`;
    } else {
      var string = `
${ username }'s ${ subject } repos:`;

      for (let repo of repos) {
        var repoString = `
${ repo.name } - ${ repo.description }`;
        string += repo === repos[repos.length -1] ? repoString + '\n' : repoString;
      }

      return string;
    }
  }
}

module.exports = ResponseFormatter;
