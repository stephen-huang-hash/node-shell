let fs = require('fs');
let path = require('path');

path = path.join(__dirname);

module.exports = function(cmd) {
  if (cmd === "ls") {
    fs.readdir(path, (err, files) => {
      if (err) {
        throw err;
      } else {
        process.stdout.write(files.join('\n'));
      }
    })
  }
}

