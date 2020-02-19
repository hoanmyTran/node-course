const fs = require ('fs')

// fs.writeFileSync('notes.txt', 'This file was created by Node.js!');

fs.appendFileSync('notes.txt','\n Hello, the content has just been added!');