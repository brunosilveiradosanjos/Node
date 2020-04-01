const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            // have to be provided in order for the command to work corectly
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        // console.log(chalk.bold.green('Adding a note'))
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            // have to be provided in order for the command to work corectly
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        // console.log(chalk.bold.red('Removing a note ' + argv.title))
        notes.removeNote(argv.title);
    }
})

// Create list commad
yargs.command({
    command: 'list',
    describe: 'List a note',
    handler() {
        notes.listNote()
    }
})

// Create a read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            // have to be provided in order for the command to work corectly
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})


yargs.parse()