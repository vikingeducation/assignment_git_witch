var GitWitch = function(inputs) {
  this.parser = inputs.parser;
  this.runner = inputs.runner;
  this.formatter = inputs.formatter;
};

GitWitch.prototype.process = function(input) {
  return new Promise((resolve, reject) => {
    let command = this.parser.parse(input);
    this.runner
      .run(command)
      .then(result => {
        let output = this.formatter.format(result);
        resolve(output);
      })
      .catch(error => {
        reject(error);
      });
  });
};

module.exports = GitWitch;
