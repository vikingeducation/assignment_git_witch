class CommandRunner {
  run() {
    return new Promise((resolve, reject) => {
      resolve("something");
    });
  }
}

module.exports = { run };
