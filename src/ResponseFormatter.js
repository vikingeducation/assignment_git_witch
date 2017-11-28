class ResponseFormatter {


  //the user griselda has 2 public repos

  format(returnObj) {
    let response = "";
    if (returnObj.subject === 'count') {
      response += `${returnObj.username} has ${returnObj.repos.length} ${returnObj.query}`
    } else if (returnObj.subject === 'details') {
      response += `${returnObj.username}'s ${returnObj.query}:`;
      returnObj.repos.forEach(repo => {
        response += `\nname: ${repo.name} description: ${repo.description}`
      })
    }

    return response;

  }
}

module.exports = ResponseFormatter;