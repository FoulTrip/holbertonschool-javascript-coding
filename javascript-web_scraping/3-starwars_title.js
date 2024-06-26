#!/usr/bin/node

const request = require("request");
const apiUrl = "https://swapi-api.hbtn.io/api/films/";
const ids = process.argv[2];

request.get(`${apiUrl}${ids}`, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    console.log(JSON.parse(body).title);
  }
});
