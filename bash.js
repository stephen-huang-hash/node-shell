let pwd = require('./pwd.js');
let ls = require('./ls.js');
let cat = require('./cat.js');
let curl = require('./curl.js');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
	const userInput = data.toString().trim();

	pwd(userInput);
	ls(userInput);
	cat(userInput);
	curl(userInput);
	process.stdout.write('\nprompt > ');
});
