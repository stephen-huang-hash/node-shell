let fs = require('fs');

module.exports = function(cmd) {
	let cmdArray = cmd.split(' ');

	if (cmdArray[0] === 'cat') {
		cmdArray.forEach((file, i) => {
			if (i === 0) return;
			fs.readFile(file, (err, data) => {
				if (err) {
					throw err;
				} else {
					process.stdout.write(data);
				}
			});
		});
	}
};
