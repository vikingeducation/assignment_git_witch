
class ResponseFormatter {
  format(input){
    if(input.query === 'count'){
      let output = '';
      output += `# the user ${input.username} has ${input.results} ${input.subject}\n`
      return output
    } else {
      let output = '';
      output += `# ${input.username}\'s ${input.subject}\n`
      input.results.forEach( (repo) => {
        output += `# ${repo.name} - ${repo.description}`
      })
      return output;
    }
  }
}

module.exports = ResponseFormatter;
