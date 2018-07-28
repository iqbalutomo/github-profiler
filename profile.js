// TODO: Connect to GitHub API | use HTTP Docs NodeJS for taken data in internet
const  https = require('https');

let get = (username) => {


const options = {
	hostname: 'api.github.com',
	port: 443,
	path: `/users/${username}`,
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
		let profile = JSON.parse(body);
		if(res.statusCode === 200) {
			// TODO: Parse the data
			// convert string to JSON (JavaScript Object)
			// TODO: Print the data out
			console.log(`${profile.login} owns ${profile.public_repos} repo(s)`);
		} else {
			console.log(`Profile with username '${username}' not found`);
		}
	});
});

	// 
	request.end()
	// untuk menampilkan pesan error
	request.on('error', (err) => {
		console.log(err);
	})
}

module.exports = {get};