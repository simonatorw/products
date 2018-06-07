const http = require('http');
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const host = '127.0.0.1';
const port = 8124;

function allowCrossDomain(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

function sendResponse(name, res) {
	const filePath = path.join(__dirname, `./app/resource/${name}.json`);

	if (fs.existsSync(filePath)) {
		//res.header('Cache-Control', 'public, max-age=31536000');
		res.header('Cache-Control', 'public, max-age=0');
		res.header('Last-Modified', 'Mon, 03 Jan 2011 17:45:57 GMT');

		const readable = fs.createReadStream(filePath);

		readable.pipe(res);
	} else {
		console.log('No such file!');
	}
}

app.use(allowCrossDomain);

const server = require('http').createServer(app);

server.listen(port, host);
console.log(`Server running at http://${host}:${port}`);

app.get('*', function(req, res) {
	sendResponse(req.url.split('/')[1], res);
});

