// Problem : We need a simple to look at GitHub prfile
// Solution : Use NodeJS to connect to GitHub API to get profile info and print out
// to the console





// TODO: Connect to GitHub API | use HTTP Docs NodeJS for taken data in internet
const  https = require('https');

// karena github mewajibkan untuk login maka kita buat object baru untuk dimasukkan keparameter
const options = {
	hostname: 'api.github.com',
	port: 443,
	path: '/users/iqbalutomo',
	method: 'GET',
	headers: {
		'user-agent': 'nodejs'
	}
}

let request = https.request(options, (res) => {
	console.log('Got Response: ', res.statusCode);
});

// 
request.end()
// untuk menampilkan pesan error
request.on('error', (err) => {
	console.log(err);
})


// TODO: Read the data
// TODO: Parse the data
// TODO: Print the data out


// arrow function
// 
// let namaFungsi = () => {
// 	console.log('Ini adalah fungsi tanpa nama.');
// }

// namaFungsi();