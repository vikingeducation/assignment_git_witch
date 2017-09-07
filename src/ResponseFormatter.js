

const ResponseFormatter = function () {
  const responseFormatter = {
    format: function (input) {
     var output = '';
     var outputCount = 0;
     //count public repos
     if (input.subject === 'repos') {
       if (input.query === 'count') {
         output = `The user ${input.username} has ${input.results.length} public repos`;
       }
       else if (input.query === 'details') {
         for (var x = 0; x < input.results.length; x++) {
           output += `#${input.results[x].name} - ${input.results[x].description}\n`;
         }
       }
     }//end repos
     else if (input.subject === 'starred repos' && input.query === 'details') {
       if (input.query === 'count') {
         for (var x = 0; x < input.results.length; x++) {
           if (input.results[x].watchers_count > 0) {
             outputCount++;
           }
           console.log("Test");
           output = `${input.username} has ${outputCount} starred rep`;
        }
       }
       else if (input.query === 'details') {
         for (var x = 0; x < input.results.length; x++) {
           if (input.results[x].stargazers_count > 0) {
             output += `#${input.results[x].name} - ${input.results[x].description}\n`;
           }
         }
       }
     }
     else {
       output = 'No results';
     }
    input.formattedResult = output;
    return input;
    }
  }
  return responseFormatter;
}

module.exports = ResponseFormatter;
