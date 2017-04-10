#!/usr/local/bin/node
const GitWitch = require('./GitWitch');
let getWitch = new GitWitch();
let input = process.argv[3];
getWitch.process(input)
