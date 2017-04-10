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

// // Example 1
// let input = "how many repos does griselda have?"
// let output = {
//   username: "griselda",
//   subject: "repos",
//   query: "count"
// }
//
// // Example 2
// let input = "what repos does griselda have?"
// let output = {
//   username: "griselda",
//   subject: "repos",
//   query: "details"
// }
//
// // Example 3
// let input = "how many starred repos does griselda have?"
// let output = {
//   username: "griselda",
//   subject: "stars",
//   query: "count"
// }

// $ gitwitch "how many repos does griselda have?"
// # the user griselda has 2 public repos
// $ gitwitch "what repos does griselda have?"
// # griselda's repos
// # Code-Coven - A version control system for weird sisters
// # Mocking-Birds - An application for the asynchronous ornithologist
// $ gitwitch "how many starred repos does griselda have?"
// $ griselda has starred has starred 1 repo
// $ gitwitch "what starred repos does griselda have?"
// $ griselda's starred repos
// # Eye-Of-Newt - EON is a new frontend framework written in pure spaghetti code.
