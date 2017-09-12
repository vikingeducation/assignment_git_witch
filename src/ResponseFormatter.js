const ResponseFormatter = function() {
  const responseFormatter = {
    format: function(gitHubResults, response) {
      var output = "";
      var outputCount = 0;
      //repos
      if (response.subject === "repos") {
        //repos count
        if (response.query === "count") {
          output = `${response.username} has ${gitHubResults.length} public repos\n`;
          //repos details
        } else if (response.query === "details") {
          output += `\n${response.username}'s public repos\n`;
          for (var x = 0; x < gitHubResults.length; x++) {
            output += `${gitHubResults[x].name} - ${gitHubResults[x]
              .description}\n`;
          }
        }
        //starred repos
      } else if (
        response.subject === "starred repos" &&
        response.query === "details"
      ) {
        //starred repo count
        if (response.query === "count") {
          for (var x = 0; x < gitHubResults.length; x++) {
            if (gitHubResults[x].watchers_count > 0) {
              outputCount++;
            }
            console.log("Test");
            output = `${response.username} has ${outputCount} starred rep`;
          }
          //starred repo details
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
