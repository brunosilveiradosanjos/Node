const fs = require('fs')

const fileName = 'notes.json'

const getNotes = function () {
    return 'Your notes...'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    // Check in every notes if the title already exists
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

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

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync(fileName, dataJSON)
}

const loadNotes = function () {

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
    addNote: addNote
}