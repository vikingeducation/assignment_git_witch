#!/usr/bin/env node
const GitWitch = require('./GitWitch');
const QuestionParser = require('./QuestionParser');
const CommandRunner = require('./CommandRunner');
const GithubApi = require('../src/GithubWrapper');
const ResponseFormatter = require('./ResponseFormatter');

const github = new GithubApi(process.env.GITHUB_TOKEN);

const questionParser = new QuestionParser();
const commandRunner = new CommandRunner(github);
const responseFormatter = new ResponseFormatter();

const gitWitch = new GitWitch({ parser: questionParser, runner: commandRunner, formatter: responseFormatter });

var string = process.argv.slice(2).join(' ');

gitWitch.process(string).then(result => {
  console.log(result);
});
