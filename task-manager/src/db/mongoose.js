const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})


// const Task = mongoose.model('Task', {
//     description: {
//         type: String
//     },
//     completed: {
//         type: Boolean
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

const User = mongoose.model('User', {
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('e-mail is not valid')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be greater than zero')
            }
        }
    }
})

const me = new User({
    name: 'Giovana',
    email: 'giovana@gmail.com',
    age: 30
})

me.save().then((me) => {
    console.log(me)
}).catch((error) => {
    console.log(error)
})