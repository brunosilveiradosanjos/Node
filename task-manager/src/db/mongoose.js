const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})


// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         trim: true,
//         required: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })

// const task = new Task({
//     description: 'Sleep',
//     completed: false
// })

// task.save().then((tast) => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })

// const me = new User({
//     name: 'Giovana',
//     email: 'giovana@gmail.com',
//     password: 'oaidva[oinvd[aod083',
//     age: 30
// })

// me.save().then((me) => {
//     console.log(me)
// }).catch((error) => {
//     console.log(error)
// })