

class CommandRunner {
  constructor(parsedObj) {
    this.parsedObj = parsedObj;
  }

  run(appendObj) {
    this.parsedObj['repos'] = appendObj;
    return this.parsedObj;
  }
}


module.exports = CommandRunner;