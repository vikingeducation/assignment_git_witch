class ResponseFormatter {
  format(responseObj) {
    console.log("PROMISE", responseObj);
    return responseObj.then(response => {
      let output = "";
      if (response.query === "details") {
        output += `${response.username}'s ${response.subject}:\n`;
        response.result.forEach(repo => {
          output += `${repo.name} - ${repo.description}\n`;
        });
      } else if (response.query === "count") {
        output += `the user ${response.username} has ${response.result} ${response.subject}`;
      }
      console.log(output);
      return new Promise(resolve => {
        resolve(output);
      });
    });
  }
}

module.exports = ResponseFormatter;
