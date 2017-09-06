
const questionParserConstructor = function () {
  const questionParser = {
    parse: function (question) {
      var match = [];
      var match2 = [];
      var result = {};
      //result.username
      var regex = new RegExp(/\w+(?=\shave)/g);
      match = question.match(regex);
      if (match === null) {
        result.name = 'none';
        return result;
      }
      result.username = match[0];
      //result.subject
      regex = new RegExp(/\w+(?=\sdoes)/g)
      match = question.match(regex);
      //check for starred
      if (match === null) {
        result.subject = 'none';
        return result;
      }
      if (match[0] = 'repos') {
        result.subject = 'repos'
        regex = new RegExp(/\w+(?=\srepos)/g)
        match2 = question.match(regex);
      }
      else if (match2[0] === 'starred') {
        result.subject = 'starred';
      }
      else {
        result.subject = 'none';
      }
      //result.query
      regex = new RegExp(`\\w+(?=\\s${result.subject})`, 'g')
      match = question.match(regex);
      if (match === null) {
        result.query = 'none';
        return result;
      }
      if (match[0] === 'what') {
        result.query = 'details';
      }
      else if (match[0] === 'many'){
        result.query = 'count';
      }
      else {
        result.query = 'none';
      }
      return result;
    }
  }

  return questionParser;
}

module.exports = questionParserConstructor;
