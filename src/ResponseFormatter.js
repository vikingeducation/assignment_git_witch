class ResponseFormatter {
  //the user griselda has 2 public repos

  format(returnObj) {
    let response = "";
    if (returnObj.query === "count") {
      response += `${returnObj.username} has ${returnObj.repos.length} ${
        returnObj.subject
      }`;
    } else if (returnObj.query === "details") {
      response += `${returnObj.username}'s ${returnObj.subject}:`;
      returnObj.repos.forEach(repo => {
        response += `\nname: ${repo.name} description: ${repo.description}`;
      });
    }

    return response;
  }
}

module.exports = ResponseFormatter;
