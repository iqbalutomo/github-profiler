// Problem : We need a simple to look at GitHub prfile
// Solution : Use NodeJS to connect to GitHub API to get profile info and print out
// to the console
let profile = require('./profile.js');

let profiles = process.argv.slice(2);
profiles.map(profile.get)  