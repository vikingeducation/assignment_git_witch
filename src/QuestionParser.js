var QuestionParser = function() {};

QuestionParser.prototype.parse = function(input) {
  var username, subject, query;
  let splitInput = input.split(' ');
  let repoIndex = splitInput.indexOf('repos');
  username = splitInput[repoIndex + 2];
  let repoCommand = splitInput.slice(0, repoIndex + 1).join(' ');

  if (repoCommand === 'what repos') {
    subject = 'repos';
    query = 'details';
  } else if (repoCommand === 'what starred repos') {
    subject = 'starred repos';
    query = 'details';
  } else if (repoCommand === 'how many repos') {
    subject = 'repos';
    query = 'count';
  } else if (repoCommand === 'how many starred repos') {
    subject = 'starred repos';
    query = 'count';
  }

  parsedCommand = {
    username: username,
    subject: subject,
    query: query
  };
  return parsedCommand;
};

module.exports = QuestionParser;
