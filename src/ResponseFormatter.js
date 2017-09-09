var ResponseFormatter = function() {};

ResponseFormatter.prototype.format = response => {
  var formattedResponse;
  var repoType;
  if (response.subject === 'starred repos') {
    repoType = 'starred repos';
  } else {
    repoType = 'public repos';
  }

  if (response.query === 'count') {
    let repoCount = response.result.length;
    formattedResponse =
      response.username + ' has ' + repoCount + ' ' + repoType;
  } else if (response.query === 'details') {
    formattedResponse = response.username + `'s ` + repoType + '\n';
    response.result.forEach(repo => {
      // console.log(repo);
      formattedResponse =
        formattedResponse + repo.name + ' - ' + repo.description + '\n';
    });
  }
  return formattedResponse;
};

module.exports = ResponseFormatter;
