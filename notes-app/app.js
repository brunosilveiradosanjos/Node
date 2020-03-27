const fs = require('fs')

// fs.writeFileSync('notes.txt', 'This file was created by Node.js!');
fs.writeFileSync('notes.txt', 'My name is Bruno');

fs.appendFileSync('notes.txt', '\n\nChallange')