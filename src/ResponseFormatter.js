class ResponseFormatter {

  constructor() {}

  format(response) {

    let output = ``;

    if (response.query === "details") {
      // output = `\n${response.username}'s ${response.subject}\n`;

      // output += response.result.map(({ name, description }) => `${name} - ${description}\n`).join('')

      // or, alternatively

      output = response.result.reduce((resultString, { name, description }) => {
        return resultString + `${name} - ${description}\n`
      }, `\n${response.username}'s ${response.subject}\n`)

    } else if (response.query === "count") {
      output = `${response.username} has ${response.result} ${response.subject}`;
    }

    return Promise.resolve(output);
  }
}

module.exports = ResponseFormatter;