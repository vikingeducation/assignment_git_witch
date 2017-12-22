const commandRunner = require("../src/CommandRunner")();
const questionParser = require("../src/QuestionParser")();
const responseFormatter = require("../src/ResponseFormatter")();

const GitWitch = function(params) {
  const gitWitch = {
    process: function(input) {
      return new Promise((resolve, reject) => {
        this.command = this.parser.parse(input);
        this.response = this.runner.run(this.command);
        this.response
          .then(result => {
            this.output = this.formatter.format(result);

            resolve(this.output);
          })
          .catch(err => reject(this.formatter.format(err)));
      });
    },

    parser: {
      parse: function(question) {
        return questionParser.parse(question);
      }
    },

    runner: {
      run: function(commands) {
        return commandRunner.run(commands.username);
      }
    },

    formatter: {
      format: function(gitHubResults) {
        return responseFormatter.format(gitHubResults, gitWitch.command);
      }
    },
    command: {},
    response: {},
    output: ""
  };
  if (params) {
    gitWitch.parser = params.parser;
    gitWitch.runner = params.runner;
    gitWitch.formatter = params.formatter;
  }
  return gitWitch;
};

module.exports = GitWitch;

// const GitWitch = function(params) {
//   const gitWitch = {
//     process: function(input) {
//       // return new Promise ( (resolve,reject) => {
//       // var results = this.parser(input);
//       //   if (results === 'Invalid input') {
//       //     reject(results);
//       //   }
//       //   else {
//       //     resolve ( this.runner(results ));
//       //   }
//       // }).then ( (result) => {
//       //   return result.results.then( (res)=> {
//       //     result.gitHubResults = res;
//       //     return this.formatter(result);
//       //   })
//       // })
//       return new Promise((resolve, reject) => {
//         this.command = this.parser.parse(input);
//         this.response = this.runner.run(this.command);
//         this.output = this.formatter.format(this.response);
//         resolve(this.output);
//       });
//     },
//     // parser: function(input) {
//     // var output;
//     // if (params) {
//     //   output = params.parser.parse(input);
//     //   console.log("paramsBlock *******");
//     // }
//     // else {
//     //   output = questionParser.parse(input);
//     //   console.log("not params block *****");
//     // }
//     // if (output.name === 'none') {
//     //   return ('Invalid input')
//     // }
//     // return(output);
//     // },
//     parser: {
//       parse: function(input) {
//         return questionParser.parse(input);
//       }
//     },
//     // runner: function(input) {
//     // var output;
//     // if (params) {
//     //   output = params.runner.run(input.username);
//     //   console.log("paramsBlock *******");
//     // }
//     // else {
//     //   output = commandRunner.run(input.username);
//     //   console.log("not params block *****");
//     // }
//     // input.results = output;
//     // return input;
//     // },
//     runner: {
//       run: function(input) {
//         return commandRunner.run(input);
//       }
//     },
//     // formatter: function(input) {
//     // var output;
//     // if (params) {
//     //   output = params.formatter.format(input);
//     //   console.log("paramsBlock *******");
//     // }
//     // else {
//     //   output = responseFormatter.format(input);
//     //   console.log("not params block *****");
//     // }
//     //
//     // return output;
//     // },
//     formatter: {
//       format: function(input) {
//         return responseFormatter.format(input);
//       }
//     },
//     command: "",
//     response: "",
//     output: ""
//   };
//   if (params) {
//     gitWitch.parser = params.parser;
//     gitWitch.runner = params.runner;
//     gitWitch.formatter = params.formatter;
//   }
//   return gitWitch;
// };
//
// module.exports = GitWitch;
//
