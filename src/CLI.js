#!/usr/local/bin/node
const GitWitch = require('./GitWitch');
let getWitch = new GitWitch();
let input = process.argv[2];

getWitch.process(input).then((result) => {
  console.log(result)
})
