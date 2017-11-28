"use strict";
require("dotenv").config();
const request = require("request");
const baseUrl = "https://api.github.com/users";

let gitWrapper = url => {
  return new Promise((resolve, reject) => {
    request.get(
      {
        url: baseUrl,
        access_token: process.env.ACESS_TOKEN,
        headers: { "User-Agent": "Foo" },
        json: true
      },
      (error, response, body) => {
        error ? reject(error) : resolve(body);
      }
    );
  });
};

let repos = username => gitWrapper(`${baseUrl}/${username}/repos`);
let starred = username => gitWrapper(`${baseUrl}/${username}/starred`);

const caller = (username, subject) => {
  switch (subject) {
    case "repos":
      return repos(username);
    case "stars":
      return starred(username);
  }
};

module.exports = caller;
