#!/usr/bin/env node
const GitWitch = require('./GitWitch');

const gitWitch = new GitWitch();
const args = process.argv.slice(2);
const input = args.join(' ');

gitWitch.process(input).then(output => {
  console.log(output);
});
