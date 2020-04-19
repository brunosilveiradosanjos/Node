require('../src/db/mongoose')
const User = require('../src/models/user')

const id = '5e9a850ea9d7d67f85030479'
const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount(id, 31).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})