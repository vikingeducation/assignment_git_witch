const GitWitch = require('./GitWitch');
const gitWitch = new GitWitch();

const command = process.argv.slice(2).join(" ");
console.log(gitWitch.process(command));
