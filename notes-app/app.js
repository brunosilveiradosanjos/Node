const chalk = require('chalk')
const getNotes = require('./notes.js')

const msg = getNotes()

console.log(chalk.blue(msg))

console.log(chalk.bold.inverse.green('Success!'))

console.log(chalk.bgBlue('Chalk test'))

// https://www.npmjs.com/package/chalk