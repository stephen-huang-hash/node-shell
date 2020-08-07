let pwd = require('./pwd.js');
let ls = require('./ls.js');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
	const cmd = data.toString().trim();

	pwd(cmd);
	ls(cmd);

	process.stdout.write('\nprompt > ');
})
