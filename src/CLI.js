#!/usr/bin/env node

const GitWitch = require("./GitWitch");

const gitWitch = new GitWitch();

const command = process.argv.slice(2).join(" ");
gitWitch.process(command).then(output => console.log(output)).catch(err => {
  console.log(err);
});
