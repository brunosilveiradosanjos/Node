const chalk = require('chalk')
const yargs = require('yargs')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log(chalk.bold.green('Adding a new note!'))
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log(chalk.bold.red('Removing a note'))
    }
})

// Create list commad
yargs.command({
    command: 'list',
    describe: 'List a note',
    handler: function () {
        console.log(chalk.bold.yellow('Listing a note'))
    }
})

// Create a read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log(chalk.bold.blue('Reading a note'))
    }
})


// add, remove, read, list
console.log(yargs.argv)

// node app.js remove