var UI = {};

UI.render = () => {

  process.stdin.resume();
  process.stdin.setEncoding("utf8");

  console.log(process.argv);


  var onData = (data) => {
    data = data.trim();
    
  };

  process.stdin.on("data", onData);
};

module.exports = UI;
