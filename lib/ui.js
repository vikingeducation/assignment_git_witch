const HEADER = `
Welcome to the Gitwitch!
======================================
Enter q to quit

`;

var UI = {};

UI.render = data => {
  var state = require(`./states/${stateName}`)(data);
  console.log(HEADER);
  console.log(state.prompt(), "\n");
  process.stdout.write("> ");

  process.stdin.resume();
  process.stdin.setEncoding("utf8");

  var onData = data => {
    data = data.trim();
    if (data === "q") {
      console.log("Goodbye!");
      process.exit();
    } else if (state.isValid(data)) {
      process.stdin.pause();
      process.stdin.removeListener("data", onData);
      state.transition(data);
    } else {
      console.log(state.view);
      console.log(state.error);
      console.log(state.prompt());
    }
  };

  process.stdin.on("data", onData);
};

module.exports = UI;
