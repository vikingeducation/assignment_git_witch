const questionParserConstructor = function() {
  const questionParser = {
    parse: function(question) {
      var match = [];
      var match2 = [];
      var result = {};
      //result.username
      var regex = new RegExp(/\w+(?=\shave)/gi);
      match = question.match(regex);
      if (match === null) {
        result.name = "none";
        return result;
      }
      result.username = match[0];
      //result.subject
      regex = new RegExp(/\w+(?=\sdoes)/gi);
      match = question.match(regex);

      if (match === null) {
        result.subject = "none";
        return result;
      }
      //check for repos or starred
      if ((match[0] = "repos")) {
        regex = new RegExp(/\w+(?=\srepos)/gi);
        match2 = question.match(regex);
        if (match2[0] === "starred") {
          result.subject = "starred repos";
        } else {
          result.subject = "repos";
        }
      } else {
        result.subject = "none";
      }
      //result.query
      regex = new RegExp(`\\w+(?=\\s${result.subject})`, "gi");
      match = question.match(regex);
      if (match === null) {
        result.query = "none";
        return result;
      }
      if (match[0] === "what" || match[0] === "What") {
        result.query = "details";
      } else if (match[0] === "many") {
        result.query = "count";
      } else {
        result.query = "none";
      }
      return result;
    }
  };

  return questionParser;
};

module.exports = questionParserConstructor;
