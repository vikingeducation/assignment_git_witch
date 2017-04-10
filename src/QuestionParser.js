class QuestionParser {
  let parse = function(question) {
    
  }
}





var parse = function(inputArr) {

  let inputLength = inputArr.length;
  let username = inputArr.reverse()[1];
  let output = {};
  
  // console.log("username ", username);

  switch (inputLength) {
    case 5: //"what repos does griselda have?"
      output = {
        'username': username,
        'subject': "repos",
        'query': "details"
        }
      return output;
    case 6: //"how many repos does griselda have?"
      output = {
        'username': username,
        'subject': "repos",
        'query': "count"
        }
      return output;
    case 7: //"how many starred repos does griselda have?"
      output = {
        'username': username,
        'subject': "stars",
        'query': "count"
        }
      return output;
    default:
  }
};

module.exports = { parse };
