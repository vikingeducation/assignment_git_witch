const ResponseFormatter = function() {
  const responseFormatter = {
    format: function(gitHubResults, response) {
      var output = "";
      var outputCount = 0;
      //count public repos
      if (response.subject === "repos") {
        if (response.query === "count") {
          output = `The user ${response.username} has ${gitHubResults.length} public repos`;
        } else if (response.query === "details") {
          for (var x = 0; x < gitHubResults.length; x++) {
            output += `#${gitHubResults[x].name} - ${gitHubResults[x]
              .description}\n`;
          }
        }
      } else if (
        response.subject === "starred repos" &&
        response.query === "details"
      ) {
        //end repos
        if (response.query === "count") {
          for (var x = 0; x < gitHubResults.length; x++) {
            if (gitHubResults[x].watchers_count > 0) {
              outputCount++;
            }
            console.log("Test");
            output = `${response.username} has ${outputCount} starred rep`;
          }
        } else if (response.query === "details") {
          for (var x = 0; x < gitHubResults.length; x++) {
            if (gitHubResults[x].stargazers_count > 0) {
              output += `#${gitHubResults[x].name} - ${gitHubResults[x]
                .description}\n`;
            }
          }
        }
      } else {
        output = "No results";
      }
      return output;
    }
  };
  return responseFormatter;
};

module.exports = ResponseFormatter;
