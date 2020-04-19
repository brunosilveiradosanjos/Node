require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('5e9b51d42567419b7fd125cb', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})