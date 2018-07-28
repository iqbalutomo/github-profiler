// Problem : We need a simple to look at GitHub prfile
// Solution : Use NodeJS to connect to GitHub API to get profile info and print out
// to the console





// TODO: Connect to GitHub API | use HTTP Docs NodeJS for taken data in internet
const  https = require('https');

const options = {
	hostname: 'api.github.com',
	port: 443,
	path: '/users/iqbalutomo',
	method: 'GET',
	headers: {
		'user-agent': 'nodejs'
	}
}


// TODO: Read the data
let request = https.request(options, (res) => {
	let body = '';
	res.on('data', (data) => {
		body = body + data;
	});
	res.on('end', () => {
	// TODO: Parse the data
	// convert string to JSON (JavaScript Object)
	let profile = JSON.parse(body);
	console.log(profile.avatar_url);
	});
	// TODO: Print the data out
});

// 
request.end()
// untuk menampilkan pesan error
request.on('error', (err) => {
	console.log(err);
})