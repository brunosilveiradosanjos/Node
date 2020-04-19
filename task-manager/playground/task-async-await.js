require('../src/db/mongoose')
const Task = require('../src/models/task')

const id = '5e9a72835a9aa5763032cf34'

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndRemove(id)
    const count = await Task.countDocuments({ completed: false })
    return { task, count }
}

deleteTaskAndCount(id).then(({ task, count }) => {
    console.log(task)
    console.log(count)
}).catch((e) => {
    console(e)
})