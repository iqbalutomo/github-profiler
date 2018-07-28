// Problem : We need a simple to look at GitHub prfile
// Solution : Use NodeJS to connect to GitHub API to get profile info and print out
// to the console
let profile = require('./profile.js');

profile.get('iqbalutomo');
profile.get('random');
profile.get('randomsecond');