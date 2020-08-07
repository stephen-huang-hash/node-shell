let request = require('request');

module.exports = function(userInput) {
	let userInputArray = userInput.split(' ');

	if (userInputArray[0] === 'curl') {
		request(userInputArray[1], { json: true }, (err, res, body) => {
			// console.log(body);
			if (err) {
				throw err;
			}
			process.stdout.write(body);
		});
	}
};
