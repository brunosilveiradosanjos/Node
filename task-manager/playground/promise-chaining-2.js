require('../src/db/mongoose')
const Task = require('../src/models/task')

const id = '5e9a85c5706a7a801adc2e4b'

Task.findByIdAndRemove(id).then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: true })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})