const fs = require('fs')
const fileName = '1-json.json'
const newName = 'Bruno'
const newAge = 28

// Reading JSON

const dataJSON = fs.readFileSync(fileName).toString()
const data = JSON.parse(dataJSON)
data.name = newName
data.age = newAge
const newJSON = JSON.stringify(data)
// console.log(newJSON)

fs.writeFileSync('_' + fileName, newJSON)