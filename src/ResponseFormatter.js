

const ResponseFormatter = function () {
  const responseFormatter = {
    format: function (input) {
     var output = [];
      for (var x = 0; x < input.length; x++) {
        output.push( input[x].name, input[x].description)
      }
      input.formattedResult = output;
      return input;
    }
  }
  return responseFormatter;
}

module.exports = ResponseFormatter;
