const fs = require('fs')
const chalk = require('chalk')
const fileName = 'notes.json'

const getNotes = () => 'Your notes...'

const addNote = (title, body) => {
    const notes = loadNotes()
    // Check in every notes if the title already exists
    const duplicateNotes = notes.filter((note) => note.title === title)

    // If this title is on notes then length <> 0
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note taken!')
    }

    console.log(notes)
}

const removeNote = (title) => {
    const notes = loadNotes()
    // Build filteredNote with the objects that are not int the JSON file 
    const filteredNote = notes.filter((note) => note.title !== title)

    // Same size means title is not int JSON file
    if (filteredNote.length != notes.length) {
        saveNotes(filteredNote)
        console.log(chalk.bold.green('"' + title + '" Note removed'))
    } else {
        console.log(chalk.bold.red('"' + title + '" is not in ' + fileName))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync(fileName, dataJSON)
}

const loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync(fileName)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}